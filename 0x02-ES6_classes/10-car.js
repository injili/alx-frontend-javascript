export default class Car {
  constructor(brand, motor, color) {
    if (!(typeof (brand) === 'string')) {
      return 'Brand must be a string';
    }
    if (!(typeof (motor) === 'string')) {
      return 'Motor must be a string';
    }
    if (!(typeof (color) === 'string')) {
      return 'Color must be a string';
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }
}
