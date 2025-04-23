export default function getStudentIdsum(list) {
  const ids = list.map((list) => list.location);
  return ids.reduce((acc, curr) => acc + curr, 0);
}
