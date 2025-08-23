import { describe, expect, test } from "bun:test";
import longestPalindrome from "./longestPalindromicSubstring";

type Case = {
	s: string;
	expected: string;
};

describe("5.最长回文子串", (): void => {
	const cases: Case[] = [
		{
			s: "babad",
			expected: "bab",
		},
		{
			s: "cbbd",
			expected: "bb",
		},
	];

	test.each(cases)("示例%#", ({ s, expected }): void => {
		const actual = longestPalindrome(s);

		expect(actual).toEqual(expected);
	});
});
