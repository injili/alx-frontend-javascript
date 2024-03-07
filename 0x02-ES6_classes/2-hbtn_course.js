export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof newName === 'string') {
			this._name = newName;
		}
	}

	get length() {
		return this._length;
	}

	set length(newLength) {
		if (typeof newLenght === 'number') {
			this._length = newLength;
		}
	}

	get students() {
		return this._students;
	}

	set students(newStudents) {
		if (typeof newStudents === 'array' || typeof newStudents === 'string') {
			this._students = newStudents;
		}
	}
}
