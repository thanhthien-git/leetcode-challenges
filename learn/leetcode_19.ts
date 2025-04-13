import { ListNode } from "./leetcode_2";

/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * using two pointer
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0);
  dummy.next = head;

  let left = dummy;
  let right = dummy;

  //move right node by n step
  for (let i = 0; i < n; i++) {
    if (!right.next) return head;
    //assign next value
    right = right.next;
  }
  //move both right and left until right hit the final node -> remove left node
  while (right.next !== null) {
    right = right.next;
    left = left.next!;
  }

  //change value
  left.next = left.next!.next!;

  return dummy.next;
}

const test19 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(`result`);

console.log(removeNthFromEnd(test19, 2));
