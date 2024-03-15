import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (!(typeof (sqft) === 'number')) {
      return ('sqft must be a number');
    }
    if (!(typeof (floors) === 'number')) {
      return ('floors must be a number');
    }

    super(sqft);
    this._floor = floors;
  }

  get floors() {
    return this._floor;
  }

  get sqft() {
    return super.sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floor} floors`;
  }
}
