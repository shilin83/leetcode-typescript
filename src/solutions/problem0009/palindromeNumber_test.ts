import { describe, expect, test } from 'bun:test'
import isPalindrome from './palindromeNumber'

const cases: {
	x: number
	expected: boolean
}[] = [
	{
		x: 121,
		expected: true,
	},
	{
		x: -121,
		expected: false,
	},
	{
		x: 10,
		expected: false,
	},
]

describe('9.回文数', (): void => {
	test.each(cases)('示例%#', ({ x, expected }): void => {
		expect(isPalindrome(x)).toEqual(expected)
	})
})
