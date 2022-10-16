import { expect, it, describe } from "vitest";
import { isKhmerSymbol } from "../src/index.js";

describe("khmer symbols", () => {
	it("should return true for khmer symbols", () => {
		const t = "᧠᧡᧢᧣᧤᧥᧦᧧᧨᧩᧪᧫᧬᧭᧮᧯᧰᧱᧲᧳᧴᧵᧶᧷᧸᧹᧺᧻᧼᧽᧾᧿";
    expect(isKhmerSymbol(t)).toEqual(true);
	});
  it("should return false for non khmer symbols", () => {
    expect(isKhmerSymbol('1234')).toEqual(false);
    expect(isKhmerSymbol('១២៣៤')).toEqual(false);
	});
  
});
