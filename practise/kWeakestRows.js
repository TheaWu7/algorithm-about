const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

// mat.map((v, i) => {
//   console.log({ v, i });
// });

// const kW = (mat, k) => {

//     // for (const [i, v] of value.entries()) {
//     //   console.log({ i, v, index, value });
//     // }
//     let sum = 0;
//     for (let i = 0; i < value.length; i++) {

//     }
//   }
// };

const kWeakestRows = function (mat, k) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {
    let val = mat[i].indexOf(0);
    if (val === -1) val = mat[i].length;
    arr.push([i, val]);
  }
  arr = arr
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0])
    .slice(0, k);
  console.log(arr);
  return arr;
};
kWeakestRows(mat, 2);
