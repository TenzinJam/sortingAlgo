function bubbleSort(arr){
  let length = arr.length
  let stillSorting = false
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < length-1; j++){
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        stillSorting = true
      }
    }
    if(!stillSorting) return arr
    length--
  }
  return arr
}
console.log(bubbleSort([5,6,-3,4,234,45,12,65,234,5,65,5]))

//  Another interesting way to set up the nested loop is to start the outer one from
// end and the start the inner from index 0
// for(let i = arr.length; i > 0; i--){
//   for(let j = 0; j < i-1; j++)
//}
//

