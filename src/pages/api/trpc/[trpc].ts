import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "../../../env/server.mjs";
import { createTRPCContext } from "../../../server/api/trpc";
import { appRouter, cachePaths } from "../../../server/api/root";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  // cache particular requests
  responseMeta({ paths, type, errors }) {
    // dont cache if there are errors/this isnt a query (never cache mutations)
    if (type !== "query" || errors.length > 0) {
      return {};
    }
    for (const pth of paths ?? []) {
      if (cachePaths.has(pth)) {
        const cacheSeconds: number | undefined = cachePaths.get(pth);
        if (cacheSeconds) {
          return {
            headers: {
              "cache-control": `s-maxage=1, stale-while-revalidate=${cacheSeconds}`,
            },
          };
        }
      }
    }
    return {};
  },
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
