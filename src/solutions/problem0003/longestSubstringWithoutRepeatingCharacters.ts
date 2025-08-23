export default function lengthOfLongestSubstring(s: string): number {
	const hashTable = new Map<string, number>();

	let left = 0,
		maxLen = 0;

	for (let [right, char] of s.split("").entries()) {
		// * 如果哈希表中存在当前元素，则移动滑动窗口左边界到当前元素的下一个位置
		const idx = hashTable.get(char);

		if (undefined !== idx && idx >= left) {
			left = idx + 1;
		}

		// * 将当前元素及其索引存入哈希表
		hashTable.set(char, right);

		// * 移动滑动窗口右边界
		right++;

		// * 计算滑动窗口最大长度
		maxLen = Math.max(maxLen, right - left);
	}

	return maxLen;
}
