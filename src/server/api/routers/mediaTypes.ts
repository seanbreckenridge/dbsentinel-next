// Generated by `main.py server generate-media-types --output-type typescript`, do not edit manually
import { z } from "zod";
export const animeMediaTypes: readonly string[] = [
  "movie",
  "music",
  "ona",
  "ova",
  "special",
  "tv",
  "unknown",
];
export const mangaMediaTypes: readonly string[] = [
  "doujinshi",
  "light_novel",
  "manga",
  "manhua",
  "manhwa",
  "novel",
  "one_shot",
];

export const allMediaTypes: readonly string[] = [
  "doujinshi",
  "light_novel",
  "manga",
  "manhua",
  "manhwa",
  "movie",
  "music",
  "novel",
  "ona",
  "one_shot",
  "ova",
  "special",
  "tv",
  "unknown",
];
export const allMediaTypesZod = z.enum([
  "doujinshi",
  "light_novel",
  "manga",
  "manhua",
  "manhwa",
  "movie",
  "music",
  "novel",
  "ona",
  "one_shot",
  "ova",
  "special",
  "tv",
  "unknown",
]);

// infer type
export type AllMediaTypes = z.infer<typeof allMediaTypesZod>;
