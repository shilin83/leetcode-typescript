import ListNode from "@/structures/ListNode";

export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	// * 创建虚拟头节点，作为结果链表的起点
	const head = new ListNode();

	let current = head,
		carry = 0;

	while (null !== l1 || null !== l2 || 0 !== carry) {
		// * 计算两个链表当前节点值与进位值的和
		const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

		// * 移动到下一个节点
		l1 = l1?.next ?? null;
		l2 = l2?.next ?? null;

		// * 创建新节点，并添加到结果链表
		current.next = new ListNode(sum % 10);
		current = current.next;

		// * 更新进位值
		carry = sum >= 10 ? 1 : 0;
	}

	return head.next;
}
