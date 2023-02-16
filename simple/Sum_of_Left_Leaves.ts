// Given the root of a binary tree, return the sum of all left leaves.
//
//   A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
//
//   Example 1:
//
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
//   Example 2:
//
// Input: root = [1]
// Output: 0

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function sumOfLeftLeaves(root: TreeNode | null): number {
  function traverse(node: TreeNode | null, isLeft: boolean): any {
    if (node === null) return 0;

    if (!node.left && !node.right) return isLeft ? node.val : 0;

    return traverse(node.left, true) + traverse(node.right, false);
  }

  return traverse(root, false);
}

// console.log(sumOfLeftLeaves([3, 9, 20, null, null, 15, 7]));
