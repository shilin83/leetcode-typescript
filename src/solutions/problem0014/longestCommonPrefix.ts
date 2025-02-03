export default function longestCommonPrefix(strs: string[]): string {
	// * 以第一个字符串为基准
	let prefix = strs[0]

	// * 遍历其他字符串，逐个比较
	for (let i = 1; i < strs.length; i++) {
		for (let j = 0; i < prefix.length; j++) {
			if (strs[i].length <= j || strs[i][j] !== prefix[j]) {
				prefix = prefix.slice(0, j)
				break
			}
		}
	}

	return prefix
}
