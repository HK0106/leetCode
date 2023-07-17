/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let stack1=[];
  let stack2=[];
  while(l1){
    stack1.push(l1.val);
    l1=l1.next;
  }
  while(l2){
    stack2.push(l2.val);
    l2=l2.next;
  }
  let l3=null;
  let carry=0;
  while(stack1.length || stack2.length || carry){
    const sum=(stack1.pop() || 0)+(stack2.pop() || 0)+carry;
    carry=Math.floor(sum/10);
    l3=new ListNode(sum%10,l3);
  }
  return l3;
};
console.log(addTwoNumbers([7,2,4,3], [5,6,4]))