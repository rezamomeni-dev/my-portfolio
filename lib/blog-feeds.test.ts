import { expect, test } from "vitest";
import { FEEDS } from "./blog-feeds";

test("FEEDS is an array of feed objects", () => {
  expect(Array.isArray(FEEDS)).toBe(true);
  expect(FEEDS.length).toBeGreaterThan(0);
  expect(FEEDS[0]).toHaveProperty('name');
  expect(FEEDS[0]).toHaveProperty('url');
});
