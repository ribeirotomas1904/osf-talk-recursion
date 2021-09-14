// some videos and readings about recursion
// https://en.wikipedia.org/wiki/Recursion_(computer_science)
// https://www.youtube.com/watch?v=-PX0BV9hGZY&ab_channel=Confreaks
// https://www.youtube.com/watch?v=Mv9NEXX1VHc&list=PLaxvM12Ynpsr2j3izyHwy1kbG_Swg03hd&ab_channel=Computerphile
// https://www.youtube.com/watch?v=IJDJ0kBx2LM&ab_channel=freeCodeCamp.org

import {
  arrayToLinkedList,
  createLinkedList,
  sumLinkedList,
  reduceLinkedList,
  reduceLinkedListTR,
  sumLinkedListTR,
} from "./linkedList.js";

import { createTree, sumTree, sumTreeK, sumTreeStack } from "./tree.js";

import { pipe, prettyPrint } from "./utils.js";

// pipe([1, 2, 3, 4, 5], arrayToLinkedList, sumLinkedList, console.log);

pipe(
  [1, 2, 3, 4, 5],
  arrayToLinkedList,
  (list) => reduceLinkedListTR((x, y) => x + y, 0, list),
  console.log
);

// prettier-ignore
const tree = createTree(
  10,
  {
    left: createTree(20),
    right: createTree(30),
  },
);

pipe(tree, sumTree, console.log);
pipe(tree, sumTreeK, console.log);
pipe(tree, sumTreeStack, console.log);

// ((x) => x(x))((x) => x(x));
