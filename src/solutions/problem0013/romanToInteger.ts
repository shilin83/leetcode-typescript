export default function romanToInt(s: string): number {
	// * 创建罗马数字与整数之间的映射
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

		// * 如果当前数字小于前一个数字，例如 IV = 4, 则减去当前数字
		// * 否则，例如 VI = 6, 则加上当前数字
		result = curr < prev ? result - curr : result + curr

		// * 更新前一个数字
		prev = curr
	}

	return result
}
