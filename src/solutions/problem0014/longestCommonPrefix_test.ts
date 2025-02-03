import { describe, expect, test } from 'bun:test'
import longestCommonPrefix from './longestCommonPrefix'

const cases: {
	strs: string[]
	expected: string
}[] = [
	{
		strs: ['flower', 'flow', 'flight'],
		expected: 'fl',
	},
	{
		strs: ['dog', 'racecar', 'car'],
		expected: '',
	},
]

describe('14.最长公共前缀', (): void => {
	test.each(cases)('示例%#', ({ strs, expected }): void => {
		expect(longestCommonPrefix(strs)).toEqual(expected)
	})
})
