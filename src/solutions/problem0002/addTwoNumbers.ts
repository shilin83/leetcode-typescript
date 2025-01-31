import ListNode from '@/structures/linkedList'

export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const head = new ListNode()
	let current = head,
		carry = 0

	while (l1 !== null || l2 !== null || carry !== 0) {
		// * 计算当前节点的和
		const sum = (l1?.val || 0) + (l2?.val || 0) + carry

		// * 链表不为空，移动到下一个节点
		l1 = l1?.next || null
		l2 = l2?.next || null

		// * 创建新节点，值为 sum 除 10 取余
		current.next = new ListNode(sum % 10)
		current = current.next

		// * 计算进位，值为 sum 除 10 取整
		carry = sum >= 10 ? 1 : 0
	}

	return head.next
}
