export default function twoSum(nums: number[], target: number): number[] {
	const hashTable = new Map<number, number>()

	for (const [key, value] of nums.entries()) {
		// * 计算目标值与当前元素的差值
		const diff = target - value

		// * 如果哈希表中存在差值，则返回差值与当前元素的索引
		if (hashTable.has(diff)) {
			return [hashTable.get(diff)!, key]
		}

		// * 将当前元素及其索引存入哈希表
		hashTable.set(value, key)
	}

	return []
}
