import { ListNode } from "./leetcode_2";

/**
 * solution: use a temporary list
 * step 1-> check that if which listnode is null, return the other
 * step 2-> create a dummy list node and tail
 * step 3-> start loop the listnode and compare with other, then add to dummy
 * step 4-> the remaining of longer listnode will add to tail
 */
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

const listNode1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const listNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(listNode1, listNode2));
