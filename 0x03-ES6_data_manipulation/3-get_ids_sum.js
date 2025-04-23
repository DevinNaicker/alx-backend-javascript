export default function getStudentIdsum(list) {
  return list.reduce((sum, student) => sum + student.id, 0);
}
