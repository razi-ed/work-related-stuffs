const codebeast = {
  [Symbol.iterator]: () => {
    const letter = [`c`, `o`, `d`, `e`, `b`, `e`, `a`, `s`, `t`];
    return {
      next: () =>
        Promise.resolve({
          done: letter.length === 0,
          value: letter.shift(),
        }),
    };
  },
};

console.log(codebeast)