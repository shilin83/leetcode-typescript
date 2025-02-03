import { describe, expect, test } from 'bun:test'
import isValid from './validParentheses'

const cases: {
	s: string
	expected: boolean
}[] = [
	{
		s: '()',
		expected: true,
	},
	{
		s: '()[]{}',
		expected: true,
	},
	{
		s: '(]',
		expected: false,
	},
	{
		s: '([])',
		expected: true,
	},
	{
		s: ' ',
		expected: false,
	},
]

describe('20.有效的括号', (): void => {
	test.each(cases)('示例%#', ({ s, expected }): void => {
		expect(isValid(s)).toEqual(expected)
	})
})
