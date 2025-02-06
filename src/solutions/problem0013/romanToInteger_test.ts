import { describe, expect, test } from 'bun:test'
import romanToInt from './romanToInteger'

const cases: {
	s: string
	expected: number
}[] = [
	{
		s: 'III',
		expected: 3,
	},
	{
		s: 'IV',
		expected: 4,
	},
	{
		s: 'IX',
		expected: 9,
	},
	{
		s: 'LVIII',
		expected: 58,
	},
	{
		s: 'MCMXCIV',
		expected: 1994,
	},
]

describe('13.罗马数字转整数', (): void => {
	test.each(cases)('示例%#', ({ s, expected }): void => {
		expect(romanToInt(s)).toEqual(expected)
	})
})
