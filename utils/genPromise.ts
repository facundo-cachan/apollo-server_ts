export default (value, text) =>
 new Promise(resolve => {
  setTimeout(() => {
   console.log(text)
   return resolve(value)
  }, 100)
 })