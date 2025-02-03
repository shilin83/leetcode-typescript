export default function isValid(s: string): boolean {
	// * 使用栈匹配括号
	let stack = []

	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
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
			// * 遇到右括号，检查是否与栈顶元素匹配
			case ')':
			case ']':
			case '}':
				// * 弹出栈顶元素
				if (stack.pop() !== s[i]) {
					return false
				}
				break
			default:
				return false
		}
	}

	// * 如果栈为空，说明括号匹配
	return stack.length === 0
}
