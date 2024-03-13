interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Injili',
  lastName: 'Nyareki',
  age: 21,
  location: 'Ohio',
}

const student2: Student = {
  firstName: 'Him',
  lastName: 'Himeth',
  age: 20,
  location: 'Nowhere',
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.style.margin = '20px';

table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const theName = document.createElement('td');
  const theLocation = document.createElement('td');

  theName.textContent = student.firstName;
  theLocation.textContent = student.location;

  //styling of the html
  theName.style.padding = '4px';
  theName.style.border = '2px solid black';
  theLocation.style.padding = '4px';
  theLocation.style.border = '2px solid black';

  row.appendChild(theName);
  row.appendChild(theLocation);
  tbody.appendChild(row);
});

document.body.appendChild(table)