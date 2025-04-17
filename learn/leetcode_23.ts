import { ListNode } from "./leetcode_2";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists) return null

  let result = lists[0] || null

  for (let i = 1; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i]);
}

  return result;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0);
  let tail = dummy;

  if (!list1) return list2;
  if (!list2) return list1;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 || list2;

  return dummy.next;
}

const l1 = new ListNode(1, new ListNode(4, new ListNode(5)))
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))
const l3 = new ListNode(2, new ListNode(6))
const test23 = [l1, l2, l3]

console.log(mergeKLists(test23));
