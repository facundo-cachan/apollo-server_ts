export default async (arr, key) => {
  return await arr.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv
  }, {})
}