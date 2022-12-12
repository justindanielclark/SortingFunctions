console.log(
  mergeSort(
    [1,2,3,0,-1,7], 
    (a, b)=>{
      return a > b ? 1 : -1;
    }
  )
)

/**
 * 
 * @param {Array} array An Array of Values to Sort
 * @param {Function} sortingFunc A Function Which Takes in Two Parameters and Returns A Number, Used to Sort the Array
 * @returns {Array} An Array of Sorted Values
 */
function mergeSort(array, sortingFunc){
  let left = array.slice(0, Math.ceil(array.length/2))
  let right = array.slice(Math.ceil(array.length/2), array.length)
  if(left.length > 1){
    left = mergeSort(left, sortingFunc);
  }
  if(right.length > 1){
    right = mergeSort(right, sortingFunc);
  }
  let [indexL, indexR] = [0,0];
  const returnArray = [];
  while(indexL != left.length || indexR != right.length){
    if(indexL === left.length){
      returnArray.push(right[indexR++]);
    } else if (indexR == right.length){
      returnArray.push(left[indexL++]);
    } else {
      if(sortingFunc(left[indexL], right[indexR]) === -1){
        returnArray.push(left[indexL++]);
      } else {
        returnArray.push(right[indexR++]);
      }
    }
  }
  return returnArray;
}