function mergeSort(arr){
  if(arr.length <= 1){
    return arr
  }
  let midPoint = Math.floor((arr.length-1)/2)
  let right = mergeSort(arr.slice(0, midPoint+1))
  let left = mergeSort(arr.slice(midPoint+1))
  arr = mergeHelper(right, left)
  return arr
}

function mergeHelper(arr1, arr2){
  let arr1Index = 0, arr2Index = 0
  let array = []
  while(arr1Index < arr1.length && arr2Index < arr2.length){
    if(arr1[arr1Index] < arr2[arr2Index]){
      array.push(arr1[arr1Index])
      arr1Index++
    }
    else{
      array.push(arr2[arr2Index])
      arr2Index++
    }
  }
  while(arr1Index < arr1.length){
    array.push(arr1[arr1Index])
    arr1Index++
  }
  while(arr2Index < arr2.length){
    array.push(arr2[arr2Index])
    arr2Index++
  }
  return array
}

console.log(mergeSort([5,6,-3,4,234,45,12,65,234,5,65,5]))

//Helper function is rather simple, because it just simple while loops to sort and combine two sorted arrays.
//Tricky part is the whole recursive function where you have to know what to pass into the recursive case and when to use the helper function.
