export default function twoSum(nums: number[], target: number): number[] {
	const hashTable = new Map<number, number>();

	for (const [i, num] of nums.entries()) {
		// * 如果哈希表中存在差值，则返回差值与当前元素的索引
		const j = hashTable.get(target - num);

		if (undefined !== j) {
			return [j, i];
		}

		// * 将当前元素及其索引存入哈希表
		hashTable.set(num, i);
	}

	return [];
}
