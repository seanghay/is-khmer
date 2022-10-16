import { it, describe, expect } from "vitest";
import {
	containsKhmer,
	isKhmer,
	isKhmerWithWhitespace,
	parseKhmer,
	isKhmerNumber,
} from "../src/mod.js";

describe("index.ts", () => {
	it("should return false with ASCII", () => {
		expect(isKhmer("ABC")).toBe(false);
		expect(isKhmer("")).toBe(false);
		expect(isKhmer(" ")).toBe(false);
		expect(isKhmer("\n")).toBe(false);
	});

	it("should return true with Khmer", () => {
		expect(isKhmer("ដោយយល់ឃើញថា")).toBe(true);
		expect(
			isKhmerWithWhitespace(
				"ដោយយល់\tឃើញ\n\rថា ការមិនទទួលស្គាល់ និងការប្រមាថមើលងាយសិទ្ធិមនុស្ស នាំឱ្យមានអំពើ ព្រៃផ្សៃសាហាវយង់ឃ្នង ធ្វើឱ្យក្ដៅក្រហាយដល់សតិសម្បជញ្ញៈមនុស្សជាតិ"
			)
		).toBe(true);
	});

	it("should return true on text with Khmer", () => {
		expect(containsKhmer("ABC ខ្មែរ")).toBe(true);
	});

	it("should return false on text without Khmer", () => {
		expect(containsKhmer("ABC")).toBe(false);
		expect(containsKhmer("ABC ABC")).toBe(false);
	});

	it("should parse Khmer text", () => {
		const text =
			"ដោយយល់ឃើញថា ការមិនទទួលស្គាល់ និងការប្រមាថមើលងាយសិទ្ធិមនុស្ស នាំឱ្យមានអំពើ ព្រៃផ្សៃសាហាវយង់ឃ្នង ធ្វើឱ្យក្ដៅក្រហាយដល់សតិសម្បជញ្ញៈមនុស្សជាតិ";
		const items = parseKhmer(text);
		expect(Array.isArray(items)).toBe(true);
		expect(items.length).toBe(6);

		for (const item of items) {
			expect(Object.keys(item)).toEqual(["start", "end", "value"]);
			expect(item.end).toBeTypeOf("number");
			expect(item.start).toBeTypeOf("number");
			expect(item.value).toBeTypeOf("string");
			expect(isKhmer(item.value)).toBe(true);
		}
	});

	it("should parse Khmer inside ASCII text", () => {
		expect(parseKhmer("Khmer ខ្មែរ Khmer")).toEqual([
			{ start: 6, end: 11, value: "ខ្មែរ" },
		]);
	});

	it("should not parse ASCII text", () => {
		expect(parseKhmer("ABC Abc")).toEqual([]);
	});
});
