import { expect, test } from "vitest";
import { cn, formatProjectDate, formatProjectTimeline } from "./utils";

test("cn merges class names correctly", () => {
   expect(cn("a", "b")).toBe("a b");
   expect(cn("a", { b: true, c: false })).toBe("a b");
   expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
});

test("formatProjectDate formats YYYY-MM correctly", () => {
   expect(formatProjectDate("2022-01")).toBe("Jan 2022");
   expect(formatProjectDate("2023-12")).toBe("Dec 2023");
   expect(formatProjectDate("Present")).toBe("Present");
   expect(formatProjectDate("present")).toBe("Present");
});

test("formatProjectDate handles invalid or empty input", () => {
   expect(formatProjectDate("")).toBe("");
   // @ts-ignore
   expect(formatProjectDate(null)).toBe("");
   expect(formatProjectDate("2022")).toBe("2022");
   expect(formatProjectDate("2022-13")).toBe("13 2022");
});

test("formatProjectTimeline formats date range correctly", () => {
   expect(formatProjectTimeline("2022-01", "2023-01")).toBe("Jan 2022 – Jan 2023");
   expect(formatProjectTimeline("2022-01", "Present")).toBe("Jan 2022 – Present");
});

test("formatProjectTimeline handles empty input", () => {
   expect(formatProjectTimeline("", "2023-01")).toBe("");
   expect(formatProjectTimeline("2022-01", "")).toBe("");
   expect(formatProjectTimeline("", "")).toBe("");
});
