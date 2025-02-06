export default function longestCommonPrefix(strs: string[]): string {
	// * 以第一个字符串为基准
	let prefix = strs[0]

	for (let i = 1; i < strs.length; i++) {
		let j = 0
		// * 逐个字符比较
		while (j < prefix.length && j < strs[i].length) {
			if (prefix[j] !== strs[i][j]) {
				prefix = prefix.slice(0, j)
				break
			}

			j++
		}
	}

	return prefix
}
