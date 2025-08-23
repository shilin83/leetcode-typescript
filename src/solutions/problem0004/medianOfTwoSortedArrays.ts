import { MaxInt32, MinInt32 } from "@/helpers";

export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	// * 确保 nums1 的长度小于等于 nums2 的长度
	const m = nums1.length,
		n = nums2.length;

	if (m > n) {
		return findMedianSortedArrays(nums2, nums1);
	}

	// * low, high 分别表示 nums1 的左右边界
	let low = 0,
		high = m;

	// * nums1:  ……………… nums1[i-1] | nums1[i] ……………………
	// * nums2:  ……………… nums2[j-1] | nums2[j] ……………………
	while (low <= high) {
		// * i, j 分别表示 nums1 和 nums2 分割点
		const i = Math.floor((low + high) / 2);
		const j = Math.floor((m + n + 1) / 2) - i;

		// * 获取分界线左右两侧的最大值和最小值
		const maxLeft1 = 0 === i ? MinInt32 : nums1[i - 1],
			minRight1 = m === i ? MaxInt32 : nums1[i],
			maxLeft2 = 0 === j ? MinInt32 : nums2[j - 1],
			minRight2 = n === j ? MaxInt32 : nums2[j];

		// * 检查分割是否正确
		if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
			if (0 === (m + n) % 2) {
				// * 偶数个元素，返回中间两个数的平均值
				return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
			}

			// * 奇数个元素，返回左半部分的最大值
			return Math.max(maxLeft1, maxLeft2);
		} else if (maxLeft1 > minRight2) {
			// * nums1 中的分界线划多了，要向左边移动
			high = i - 1;
		} else {
			// * nums1 中的分界线划少了，要向右边移动
			low = i + 1;
		}
	}

	return 0.0;
}
