var middleNode = function(head) {
  let p = head;
  let q = head;
  while(q && q.next) {
      p = p.next;
      q = q.next.next;
  }
  return p;
};

module.exports = middleNode;