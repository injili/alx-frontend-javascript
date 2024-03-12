export default function setFromArray(array) {
  const mySet = new Set();
  for (const a of array) {
    mySet.add(a);
  }
  return mySet;
}
