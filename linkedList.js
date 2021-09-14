// LinkedList<T> = null | { head: T, tail: LinkedList<T> }

// nil
export const emptyList = null;

// cons
export const createLinkedList = (head, tail = null) => {
  return {
    head,
    tail,
  };
};

export const isEmptyList = (list) => list === emptyList;

export const arrayToLinkedList = (array) => {
  return array.reduceRight((tail, head) => createLinkedList(head, tail), null);
};

export const sumLinkedList = (list) => {
  if (isEmptyList(list)) {
    return 0;
  }

  const { head, tail } = list;

  return head + sumLinkedList(tail);
};

export const sumLinkedListTR = (list) => {
  const aux = (acc, list) => {
    if (isEmptyList(list)) {
      return acc;
    }

    const { head, tail } = list;

    const nextAcc = acc + head;
    const nextList = tail;

    return aux(nextAcc, nextList);
  };

  return aux(0, list);
};

export const reduceLinkedList = (f, init, list) => {
  if (isEmptyList(list)) {
    return init;
  }

  const { head, tail } = list;

  return f(head, reduceLinkedList(f, init, tail));
};

export const reduceLinkedListTR = (f, init, list) => {
  let aux = (acc, list) => {
    if (isEmptyList(list)) {
      return acc;
    }

    const { head, tail } = list;

    const nextAcc = f(acc, head);

    return aux(nextAcc, tail);
  };

  return aux(init, list);
};
