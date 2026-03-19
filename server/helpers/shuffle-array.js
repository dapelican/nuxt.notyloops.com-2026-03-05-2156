'use strict';

// Fisher-Yates shuffle
const shuffleArray = (array) => {
  const new_array = array.slice();
  for (let idx_1 = new_array.length - 1; idx_1 > 0; idx_1 -= 1) {
    const idx_2 = Math.floor(Math.random() * (idx_1 + 1));
    [new_array[idx_1], new_array[idx_2]] = [new_array[idx_2], new_array[idx_1]];
  }
  return new_array;
};

export {
  shuffleArray,
};
