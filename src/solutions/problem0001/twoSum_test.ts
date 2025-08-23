import { describe, expect, test } from "bun:test";
import twoSum from "./twoSum";

type Case = {
	nums: number[];
	target: number;
	expected: number[];
};

describe("1.两数之和", (): void => {
	const cases: Case[] = [
		{
			nums: [2, 7, 11, 15],
			target: 9,
			expected: [0, 1],
		},
		{
			nums: [3, 2, 4],
			target: 6,
			expected: [1, 2],
		},
		{
			nums: [3, 3],
			target: 6,
			expected: [0, 1],
		},
	];

	describe("1.两数之和", (): void => {
		test.each(cases)("示例 %#", ({ nums, target, expected }): void => {
			const actual = twoSum(nums, target);

			expect(actual).toEqual(expected);
		});
	});
});
