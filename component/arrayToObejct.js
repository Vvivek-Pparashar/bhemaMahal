function arraysToObject(keys, values) {
  const result = [];

  const len = values.length;

  // Loop through the keys and assign corresponding array from values to the result object
  for (let i = 0; i < len; i++) {
    const temp = {};
    for (let j = 0; j < values[i].length; j++) {
      temp[keys[j]] = values[i][j];
    }

    result.push(temp);
  }

  return result;
}

export { arraysToObject };
