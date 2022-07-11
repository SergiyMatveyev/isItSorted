function checkIsArraySorted(array) {
  let start = findDifferentSiblings(array, 0),
    way = compare(array[start], array[start + 1]);
  return isSorted(array, way, start) ? (way ? "Yes, ASC" : "Yes, DESC") : "No";
}

function findDifferentSiblings(array, start) {
  return array[start] !== array[start + 1]
    ? start
    : findDifferentSiblings(array, ++start);
}

function compare(a, b) {
  return a < b ? true : false;
}

function isSorted(array, way, start) {
  start++;
  if (start + 1 < array.length) {
    let condition =
      array[start] !== array[start + 1] &&
      way !== compare(array[start], array[start + 1]);
    return condition ? false : isSorted(array, way, ++start);
  }
  return true;
}

// Tests
function test() {
  let testArray = [
    [[0, 0, 0, 1, 2, 3], "Yes, ASC"],
    [[1, 2, 3, 4, 5, 6], "Yes, ASC"],
    [[1, 2, 3, 5, 5, 5], "Yes, ASC"],
    [[1, 2, 5, 5, 5, 6], "Yes, ASC"],
    [[9, 8, 7, 6, 5, 4], "Yes, DESC"],
    [[10, 10, 10, 3, 2, 1], "Yes, DESC"],
    [[3, 2, 1, 0, 0, 0], "Yes, DESC"],
    [[1, 0, 30, 20, 11, 16], "No"],
  ];

  testArray.forEach((element) => {
    console.log(checkIsArraySorted(element[0]) === element[1]);
  });
}

test();
