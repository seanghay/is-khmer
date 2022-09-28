export interface KhmerMatchResult {
	start: number;
	end: number;
	value: string;
}

export function containsKhmer(text: string) {
	return /[\u1780-\u17FF]+/.test(text);
}

export function isKhmer(text: string): boolean {
	return /^[\u1780-\u17FF]+$/.test(text);
}

export function isKhmerWithWhitespace(text: string): boolean {
	return /^[\u1780-\u17FF\u200c\u25cc\s]+$/.test(text);
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
