const randomItemsPosition = (arr, arrLength) => {
  const generateRandomIndex = () =>
    Math.floor(Math.random() * arrLength);

  const newArr = [];

  const randomIndex = generateRandomIndex();
  let compare = randomIndex;

  newArr.push(arr[randomIndex]);

  for (let i = 0; i < arr.length - 1; i++) {
    let newRandomIndex = generateRandomIndex();

    if (
      compare !== newRandomIndex &&
      !newArr.includes(arr[newRandomIndex])
    ) {
      newArr.push(arr[newRandomIndex]);
      compare = newRandomIndex;
    } else {
      do {
        newRandomIndex = generateRandomIndex();
      } while (
        compare === newRandomIndex ||
        newArr.includes(arr[newRandomIndex])
      );

      newArr.push(arr[newRandomIndex]);
      compare = newRandomIndex;
    }
  }

  return newArr;
};
