import { describe, expect, test } from 'bun:test'
import twoSum from './twoSum'

const cases: {
	nums: number[]
	target: number
	expected: number[]
}[] = [
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
	{
		nums: [1, 2],
		target: 4,
		expected: [],
	},
]

describe('1.两数之和', (): void => {
	test.each(cases)('示例%#', ({ nums, target, expected }): void => {
		expect(twoSum(nums, target)).toEqual(expected)
	})
})
