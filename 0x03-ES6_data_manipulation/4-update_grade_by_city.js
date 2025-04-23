export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentsInCity = list.filter((list) => list.location === city);
  const cityList = studentsInCity.map((student) => {
    const match = newGrades.find((grade) => grade.studentId === student.id);

    if (match) {
      return { ...student, grade: match.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return cityList;
}
