function quickSort(arr, start = 0, end = arr.length-1){
  let pivot = pivotFinder(arr, start, end)
  if(start < end){
    quickSort(arr, start, pivot-1)
    quickSort(arr, pivot+1, end)
  }
  return arr
}

console.log(quickSort([5,6,-3,4,234,45,12,65,234,65,9]))

function pivotFinder(arr, start = 0, end = arr.length-1){
  let pivot = arr[start]
  let pivotIndex = start
  for(let i = start + 1; i <= end; i++){
    if(arr[i]<pivot){
      pivotIndex++
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]]
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]
  console.log(arr)
  return pivotIndex
}
// console.log(pivotFinder([10,6,-3,4,234,45,12,65,234,65,9]))
//As cold stele mentioned, this one is a little hard to articulate. I had to review the steps I needed to follow to write this function.
// building the helper function pivotFinder was a little tricky. Also, don't get fooled by the misnomer, the helper does more than just return the pivot index. It also moves all the number less than the pivot to the left of it. This is later useful in the recursive function.

//Yeah, I need to do this again. I almost got this, except for one varibale assignment in the helper function.

// in the main recursive function, I am still not confident about why we have IF over WHILE. Unless it is a deeply nested data, you would wanna avoid using any looping in a recursion.

