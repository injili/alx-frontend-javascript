export default class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string') {
			throw new TypeError('Name must be a string');
		} else if (typeof length !== 'number') {
			throw new TypeError('Length must be a number');
		} else if (!Array.isArray(students)) {
			throw new TypeError('Students must be an array of strings');
		}
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
		} else {
			throw new TypeError('Name must be a string');
		}
	}

	get length() {
		return this._length;
	}

	set length(newLength) {
		if (typeof newLenght === 'number') {
			this._length = newLength;
		} else {
			throw new TypeError('Length must be a number');
		}
	}

	get students() {
		return this._students;
	}

	set students(newStudents) {
		if (Array.isArray(newStudents)) {
			this._students = newStudents;
		} else {
			throw new TypeError('Students must be an array of string');
		}
	}
}
