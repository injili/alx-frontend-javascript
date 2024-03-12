export default function createInt8TypedArray(length, position, value) {
  if (length - 1 <= position || position < 0) {
    throw new Error('Position outside range');
  }
  const arrayB = new ArrayBuffer(length);
  arrayB[position] = value;
  return (arrayB);
}
