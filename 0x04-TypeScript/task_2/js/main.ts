interface DirectorInterface {
  salary: number | string;
  workFromHome(): string;
  getCofferrBreak(): string;
  workDirectorTasks(): string;
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

  workDirectorTasks(): string {
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

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid class';
  }
}