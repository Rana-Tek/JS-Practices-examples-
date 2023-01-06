//* Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

// For example:

// A = [12, 14, 16];
// B = [11, 13, 17];
// expectedOutput = [11, 12, 13, 14, 16, 17];

let A = [12, 14, 16];
let B = [11, 13, 17];

let C = A.concat(B);
C.sort((a, b) => a - b);
console.log(C);





