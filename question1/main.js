const isValidTarget = (target) => {
  return typeof target === "number";
};

const isValidArray = (arr) => {
  return Array.isArray(arr) && arr.every((num) => typeof num === "number");
};

const findSumPairs = (arr, target) => {
  if (!isValidTarget(target)) {
    throw new Error("Invalid target!");
  }
  if (!isValidArray(arr)) {
    throw new Error("Invalid array!");
  }

  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

console.log(findSumPairs([2, 7, 11, 15], 9));
console.log(findSumPairs([3, 2, 4], 6));
console.log(findSumPairs([3, 3], "b"));
console.log(findSumPairs([2, 4, "b"], 6));
