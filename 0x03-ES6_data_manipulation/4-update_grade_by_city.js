export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const students = studentsList.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  return (students.map((student) => {
    const one = student;
    for (const grade of newGrades) {
      if (one.id === grade.studentId) {
        one.grade = grade.grade;
      }
    }
    return one;
  }));
}
