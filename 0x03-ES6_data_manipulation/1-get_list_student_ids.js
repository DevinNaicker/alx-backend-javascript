export default function getListStudentsIds(getListStudent) {
  if (!Array.isArray(getListStudent)) {
    return [];
  }
  const ids = getListStudent.map((student) => student.id);
  return (ids);
}
