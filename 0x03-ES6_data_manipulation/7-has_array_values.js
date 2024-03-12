export default function hasValuesFromArray(theSet, theArray) {
  for (const a of theArray) {
    if (!(theSet.has(a))) {
      return (false);
    }
  }
  return (true);
}
