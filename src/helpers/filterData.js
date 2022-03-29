export default function filterData(data, query) {
  const result = data.filter(({ name }) => name.toLowerCase().includes((query.toLowerCase())));
  return result;
}