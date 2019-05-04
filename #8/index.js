/* A unival tree (which stands for "universal value") is a tree where all nodes
 * under it have the same value.
 *
 * Given the root to a binary tree, count the number of unival subtrees.
 *
 * For example, the following tree has 5 unival subtrees:
 *
 *   0
 *  / \
 * 1   0
 *    / \
 *   1   0
 *  / \
 * 1   1
 *
 */

function Node(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function isUnivalTree(root) {
  if (!root)
    return true;

  if (root.left && root.left.value !== root.value)
    return false;
  if (root.right && root.right.value !== root.value)
    return false;

  return isUnivalTree(root.left) && isUnivalTree(root.right);
}

function countUnivalSubTrees(root) {
  if (!root)
    return 0;

  let total = countUnivalSubTrees(root.left) + countUnivalSubTrees(root.right);

  if (isUnivalTree(root))
    total++;

  return total;
}

let isUnivalTree1 = new Node(0);

let isUnivalTree2 = new Node(
  1,
  new Node(1)
);

let isUnivalTree3 = new Node(
  1,
  new Node(1),
  new Node(1)
);

let isUnivalTree4 = new Node(
  1,
  new Node(0),
  new Node(1)
);

let isUnivalTree5 = new Node(
  1,
  new Node(1,
    new Node(1)),
  new Node(1,
    null,
    new Node(1))
);

let tree1 = new Node(
  0,
  new Node(1),
  new Node(0,
    new Node(1,
      new Node(1),
      new Node(1)),
    new Node(0))
);

let tree2 = new Node(
  0,
  new Node(1),
  new Node(
    0,
    new Node(1,
      new Node(1),
      new Node(1,
        new Node(1),
        new Node(1))),
    new Node(0)
  )
);

let tree3 = new Node(
  0,
  new Node(1),
  new Node(0,
    new Node(1,
      new Node(1),
      new Node(1,
        new Node(1))),
    new Node(0))
);

let tree4 = new Node(
  0,
  new Node(1),
  new Node(
    0,
    new Node(1,
      new Node(1),
      new Node(1,
        new Node(1),
        new Node(1,
          null,
          new Node(1)))),
    new Node(0)
  )
);

let tree5 = new Node(
  0,
  new Node(1),
  new Node(
    0,
    new Node(1,
      new Node(1),
      new Node(1,
        new Node(1),
        new Node(1,
          new Node(1),
          new Node(1)))),
    new Node(0)
  )
);

let tree6 = new Node(
  0,
  new Node(1),
  new Node(
    0,
    new Node(1,
      new Node(1),
      new Node(0,
        new Node(1),
        new Node(1,
          new Node(1),
          new Node(1)))),
    new Node(0)
  )
);

let tree7 = new Node(
  0,
  new Node(1),
  new Node(
    0,
    new Node(0,
      new Node(1),
      new Node(1,
        new Node(1),
        new Node(1,
          new Node(1),
          new Node(1)))),
    new Node(0)
  )
);