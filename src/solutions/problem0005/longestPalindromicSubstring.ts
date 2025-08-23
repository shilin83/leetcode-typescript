export default function longestPalindrome(s: string): string {
	const length = s.length;

	// * 从中心向两边扩散
	const expandAroundCenter = (left: number, right: number): [number, number] => {
		// * 当左右指针在边界内且对应字符相等，继续扩展
		while (0 <= left && right < length && s[left] === s[right]) {
			left--;
			right++;
		}

		return [left + 1, right - 1];
	};

	// * 初始回文子串的左右边界
	let start = 0,
		end = 0;

	for (let i: number = 0; i < length - 1; i++) {
		// * 奇数长度回文串
		const [left1, right1] = expandAroundCenter(i, i),
			// * 偶数长度回文串
			[left2, right2] = expandAroundCenter(i, i + 1);

		// * 更新回文子串的左右边界
		if (right1 - left1 > end - start) {
			start = left1;
			end = right1;
		}

		if (right2 - left2 > end - start) {
			start = left2;
			end = right2;
		}
	}

	return s.slice(start, end + 1);
}
