export const intersectionOfArrays = (arr1: Array<number>, arr2: Array<number>): Array<number> => {
  arr1 = [...new Set(arr1)];
  arr2 = [...new Set(arr2)];
  return arr1
    .filter((i) => arr2.includes(i))
    .sort(function (a, b) {
      return a - b;
    });
};

export default intersectionOfArrays;
