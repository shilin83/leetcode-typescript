export default function isValid(s: string): boolean {
	let stack: string[] = []

	for (const c of s) {
		switch (c) {
			// * 遇到左括号，将对应的右括号入栈
			case '(':
				stack.push(')')
				break
			case '[':
				stack.push(']')
				break
			case '{':
				stack.push('}')
				break
			default:
				// * 遇到右括号，检查是否与栈顶元素匹配
				// * 其他字符都是非法的
				if (stack.pop() !== c) {
					return false
				}
				break
		}
	}

	return stack.length === 0
}
