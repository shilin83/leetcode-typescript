export default function romanToInt(s: string): number {
	// * 创建罗马数字到整数的映射
	const hashTable = new Map<string, number>()
		.set('I', 1)
		.set('V', 5)
		.set('X', 10)
		.set('L', 50)
		.set('C', 100)
		.set('D', 500)
		.set('M', 1000)

	let result = 0,
		prev = 0

	// * 从右向左遍历，处理特殊规则（如IV = 5-1 = 4）
	for (let i = s.length - 1; i >= 0; i--) {
		const curr = hashTable.get(s[i])!

		// * 如果当前值小于前一个值，说明是特殊情况（如IV）
		if (curr < prev) {
			result -= curr
		} else {
			result += curr
		}

		prev = curr
	}

	return result
}
