import { createLinkedList, emptyList, isEmptyList } from "./linkedList.js";

// Tree<T> = null (leaf) | { value: T, left: LinkedList<T>, right: LinkedList<T> }

export const emptyTree = null;

export const isEmptyTree = (tree) => tree === emptyTree;

export const createTree = (value, { left = null, right = null } = {}) => {
  return {
    value,
    left,
    right,
  };
};

export const sumTree = (tree) => {
  if (isEmptyTree(tree)) {
    return 0;
  }

  const { value, left, right } = tree;

  return value + sumTree(left) + sumTree(right);
};

// doesn't work
export const sumTreeTR = (tree) => {
  const aux = (acc, tree) => {
    if (isEmptyTree(tree)) {
      return acc;
    }

    const { value, left, right } = tree;

    const nextAcc = acc + value;

    return aux(nextAcc /* left? right?  */);

    // return value + aux(left) + aux(right);
  };

  return aux(0, tree);
};

// step by step transformation in cps
// credits: https://discuss.ocaml.org/t/what-is-the-use-of-continuation-passing-style-cps/4491/4
// add intermediate values
// add a continuation to the args and before returning any value
// replace all intermediate `let x = f y` by `tree_height y (fun x ->` : *
// replace all intermediate `const leftSum = aux(left); *` by `aux(left, leftSum => *)`

export const sumTreeK = (tree) => {
  const aux = (tree, k) => {
    if (isEmptyTree(tree)) {
      return k(0);
    }

    const { value, left, right } = tree;

    // prettier-ignore
    const nextK = (leftSum) => {

      return aux(right, (rightSum) => {

        return k(value + leftSum + rightSum);

      });

    };

    return aux(left, nextK);
  };

  return aux(tree, (x) => x);
};

export const sumTreeStack = (tree) => {
  let aux = (stack, acc, tree) => {
    if (isEmptyTree(tree) && isEmptyList(stack)) {
      return acc;
    }

    if (isEmptyTree(tree)) {
      const { head, tail } = stack;
      const nextTree = head;
      const nextStack = tail;

      return aux(nextStack, acc, nextTree);
    }

    const { value, left, right } = tree;

    const nextStack = createLinkedList(right, stack);
    const nextAcc = acc + value;

    return aux(nextStack, nextAcc, left);
  };

  return aux(emptyList, 0, tree);
};
