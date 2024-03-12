export default function cleanSet(theSet, startString) {
  const theList = [];

  if (typeof theSet !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const a of theSet) {
    if (a && a.startsWith(startString)) {
      theList.push(a.slice(startString.length));
    }
  }
  return theList.join('-');
}
