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

function countUnivalSubTrees(root) {
  return countUnivalSubTreesHelper(root).counter;
}

function countUnivalSubTreesHelper(root) {
  if (!root)
    return {counter: 0, isUnival: true};

  let leftTree = countUnivalSubTreesHelper(root.left);
  let rightTree = countUnivalSubTreesHelper(root.right);

  let total = leftTree.counter + rightTree.counter;

  if (leftTree.isUnival && rightTree.isUnival) {

    if (root.left && root.value !== root.left.value)
      return {counter: total, isUnival: false};
    if (root.right && root.value !== root.right.value)
      return {counter: total, isUnival: false};

    return {counter: total + 1, isUnival: true}
  }
  return {counter: total, isUnival: false};
}

// Trees for tests
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