interface DirectorInterface {
  salary: number | string;
  workFromHome(): string;
  getCofferrBreak(): string;
  workDirectorTask(): string;
}

interface TeacherInterface {
  salary: number | string;
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  salary: number | string;
  constructor(salary: number | string) {
    this.salary = salary;
  }

  workFromHome(): string {
    return 'Working from home';
  }

  getCofferrBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTask(): string {
    return 'Getting a director task';
  }
}

class Teacher implements TeacherInterface {
  salary: number | string;
  constructor(salary: number | string) {
    this.salary = salary;
  }

  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher(salary);
  } else {
    return new Director(salary);
  }
}