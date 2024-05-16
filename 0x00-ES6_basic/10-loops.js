export default function appendToEachArrayValue(array, appendString) {
  const thisArr = [];
  for (const idx of array) {
    const value = idx;
    thisArr.push(appendString + value);
  }

  return thisArr;
}
