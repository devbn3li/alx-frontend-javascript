export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

export function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((obj) => obj.id);
}
