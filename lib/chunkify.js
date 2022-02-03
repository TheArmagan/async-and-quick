const chillout = require("chillout");

module.exports = async function chunkify(array, chunkSize) {
  if (!array || !chunkSize) return array;

  let length = array.length;
  let slicePoint = 0;
  let result = [];

  await chillout.until(() => {
    if (slicePoint < length) {
      result.push(array.slice(slicePoint, slicePoint + chunkSize))
      slicePoint += chunkSize;
    } else {
      return chillout.StopIteration;
    }
  });

  length = slicePoint = 0;
  return result;
}