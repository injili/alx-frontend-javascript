export default class HolbertonClass {
  constructor(size, location) {
    if (!(typeof (size) === 'number')) {
      return 'Size must be a number';
    }
    if (!(typeof (location) === 'string')) {
      return 'Location must be a string';
    }

    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
