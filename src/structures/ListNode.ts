export default class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val: number = 0, next: ListNode | null = null) {
		this.val = val;
		this.next = next;
	}
}

export const toList = (nums: number[]): ListNode | null => {
	let head = null;

	for (const num of nums) {
		head = new ListNode(num, head);
	}

	return head;
};

export const toArray = (head: ListNode | null): number[] => {
	const nums = [];

	while (null !== head) {
		nums.push(head.val);
		head = head.next;
	}

	return nums;
};
