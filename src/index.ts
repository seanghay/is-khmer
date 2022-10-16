export interface KhmerMatchResult {
	start: number;
	end: number;
	value: string;
}

export function parseKhmer(text: string): KhmerMatchResult[] {
	const regex = /[\u1780-\u17ff]+/gm;
	let result: RegExpExecArray | null = null;
	const matches: KhmerMatchResult[] = [];
	while ((result = regex.exec(text))) {
		const { index: start } = result;
		const end = regex.lastIndex;
		const value = result[0];
		matches.push({ start, end, value });
	}
	return matches;
}

export function containsKhmer(text: string) {
	return someCharactersInRange(text, 0x1780, 0x17ff);
}

export function isKhmer(text: string): boolean {
	return charactersInRange(text, 0x1780, 0x17ff);
}

export function isKhmerSymbol(text: string): boolean {
	return charactersInRange(text, 0x19e0, 0x19ff);
}

export function isKhmerWithWhitespace(text: string): boolean {
	return charactersInRange(
		text,
		0x1780,
		0x17ff,
		[0x200c, 0x25cc, 0x20, 0x9, 0xa, 0xd] // whitespace
	);
}

export function isKhmerConsonant(character: string): boolean {
	return charactersInRange(character, 0x1780, 0x1780 + 0x34);
}

export function isKhmerNumber(text: string) {
	return charactersInRange(text, 0x17e0, 0x17e9);
}

export function numberAsInteger(text: string | number): number {
  if (typeof text === 'number') return text;
  if (typeof text === 'string') {
    let l = text.length;
    let str = '';
    while (l--) {
      const c = text.charCodeAt(l);
      if (c >= 0x17e0 && c <= 0x17e9) {
        str = String.fromCharCode(c - 0x17e0 + 0x30) + str;
        continue;
      }
      str = text.charAt(l) + str;
    }
    return parseInt(str, 10);
  }
  return NaN;
}

function charactersInRange(
	text: string,
	start: number,
	end: number,
	ignores?: number[]
): boolean {
	if (typeof text !== "string") return false;
	let l = text.length;
	while (l--) {
		const c = text.charCodeAt(l);
		if (Array.isArray(ignores) && ignores.includes(c)) continue;
		if (c < start || c > end) return false;
	}
	return Boolean(text);
}

function someCharactersInRange(
	text: string,
	start: number,
	end: number
): boolean {
	if (typeof text !== "string") return false;
	let l = text.length;
	while (l--) {
		const c = text.charCodeAt(l);
		if (c >= start && c <= end) return true;
	}
	return false;
}
