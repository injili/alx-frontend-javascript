export default class Airport {
  constructor(name, code) {
    if (!(typeof (name) === 'string')) {
      return 'Name must be a string';
    }
    if (!(typeof (code) === 'string')) {
      return 'Code must be a string';
    }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
