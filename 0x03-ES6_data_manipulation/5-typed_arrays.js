export default function createInt8TypedArray(length, position, value) {
  const arrayB = new ArrayBuffer(length);
  const arrayD = new DataView(arrayB);
  try {
    arrayD.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return (arrayD);
}
