export default function lengthOfLongestSubstring(s: string): number {
	let left = 0,
		right = 0,
		maxLength = 0,
		hashTable = new Map<string, number>()

	while (right < s.length) {
		// * 如果哈希表中存在当前元素，移动滑动窗口左边界
		const char = s[right]
		if (hashTable.has(char)) {
			left = Math.max(left, hashTable.get(char)! + 1)
		}

		// * 将当前元素及其索引存入哈希表
		// * 移动滑动窗口右边界
		// * 计算滑动窗口最大长度
		hashTable.set(char, right)
		right++
		maxLength = Math.max(maxLength, right - left)
	}

	return maxLength
}
