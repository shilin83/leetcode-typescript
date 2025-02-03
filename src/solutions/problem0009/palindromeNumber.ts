export default function isPalindrome(x: number): boolean {
	// * 负数不是回文数
	// * 最后一位数字 0 必须是 0 本身才是回文数
	if (x < 0 || (x % 10 === 0 && x !== 0)) {
		return false
	}

	// * 当原始数字大于反转后的数字时，说明还没有处理到一半
	let reverted = 0
	while (x > reverted) {
		reverted = reverted * 10 + (x % 10)
		x = ~~(x / 10)
	}

	// * 当数字长度为偶数时，1221 -> x = 12, reversed = 12
	// * 当数字长度为奇数时，12321 -> x = 12, reversed = 123
	return x === reverted || x === ~~(reverted / 10)
}
