export default class ListNode {
	val: number
	next: ListNode | null

	constructor(val: number = 0, next: ListNode | null = null) {
		this.val = val
		this.next = next
	}
}

export const arrayToList = (arr: number[]): ListNode | null => {
	let head = null

	for (const item of arr.reverse()) {
		const node = new ListNode(item)
		node.next = head
		head = node
	}

	return head
}
