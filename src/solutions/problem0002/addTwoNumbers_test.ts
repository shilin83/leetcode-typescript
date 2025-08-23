import { describe, expect, test } from "bun:test";
import { toArray, toList } from "@/structures/ListNode";
import addTwoNumbers from "./addTwoNumbers";

type Case = {
	l1: number[];
	l2: number[];
	expected: number[];
};

describe("2.两数相加 ", (): void => {
	const cases: Case[] = [
		{
			l1: [2, 4, 3],
			l2: [5, 6, 4],
			expected: [7, 0, 8],
		},
		{
			l1: [0],
			l2: [0],
			expected: [0],
		},
		{
			l1: [9, 9, 9, 9, 9, 9, 9],
			l2: [9, 9, 9, 9],
			expected: [8, 9, 9, 9, 0, 0, 0, 1],
		},
	];

	test.each(cases)("示例%#", ({ l1, l2, expected }): void => {
		const actual = toArray(addTwoNumbers(toList(l1), toList(l2)));

		expect(actual).toEqual(expected);
	});
});
