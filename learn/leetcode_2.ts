export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0;
  let tempResult = 0;
  let result: ListNode = { val: 0, next: null };
  let head = result;
  while (l1 !== null || l2 !== null) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    tempResult = val1 + val2 + carry;

    //if temp > 10 -> temp = temp/10
    if (tempResult >= 10) {
      tempResult = tempResult % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    head.next = { val: tempResult, next: null };
    head = head.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

  }

  if (carry > 0) {
    head.next = { val: carry, next: null };
  }

  return result.next;
}
//step 1: convert to num
//step 2: add two num
function logListNode(node: ListNode | null): void {
  let current = node;
  const values = []; // Collect values for easy visualization
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

function main() {
  const l1 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );
  const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
  const l3: ListNode | null = addTwoNumbers(l1, l2);
  logListNode(l3);
}

main();
