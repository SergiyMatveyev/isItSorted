function checkIsArraySorted(array) {
  if (array[0] === array[array.length - 1]) return "No";

  let direction;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) continue;
    if (direction === undefined) direction = array[i] < array[i + 1];
    if (direction !== array[i] < array[i + 1]) return "No";
  }

  return array[0] < array[array.length - 1] ? "Yes, ASC" : "Yes, DESC";
}

// Tests
function test() {
  let testArray = [
    [[1, 2, 3, 5, 5, 4], "No"],
    [[4, 3, 3, 3, 2, 5], "No"],
    [[0, 0, 0, 1, 2, 3], "Yes, ASC"],
    [[1, 2, 3, 4, 5, 6], "Yes, ASC"],
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
