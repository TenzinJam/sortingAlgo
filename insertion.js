function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let count = 0
    let reference = arr[i]
    for(let j = i-1; j >= 0; j--){
      if(reference < arr[j]){
        //you can potentially keep swapping whenever the above condition is met and you dont need to keep track of the count. But if we are only assiging a value to a new index, we need to keep track of how many times we have done that to make sure we put the "reference" in the right index. Try to implement this using swap any time the condition is true.
        arr[j+1] = arr[j]
        count++
      }
      else break
    }
    arr[i-count] = reference
  }
  return arr
}

console.log(insertionSort([5,6,-3,4,234,45,12,65,234,5,65,5]))
//this sorting is not as intuitive. I might have to come back to review it.
// the solution on Cold Stele's implementation is a bit confusing. Not as intuitive. I think it is the way he has designed his loop that makes it less intuitive. 
