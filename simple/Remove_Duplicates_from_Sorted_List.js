// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

const deleteDuplicates = function(head) {
  if(head===null) return head;

  let node  = head;

  while(node && node.next) {
    if(node.next.val === node.val) {
      node.next = node.next.next
    }else {
      node = node.next
    }
  }

  return head;
};


