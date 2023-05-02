/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/

const reverseSeq = (n: number): number[] => {
  return Array
    .from({length: n}, (_, i) => i + 1)
    // {length: n} - абстрактный итерируемый обьект с колич. элементов n
    .reverse()
};

console.log(reverseSeq(5))