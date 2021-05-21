function selectionSort(arr){
 for(let i = 0; i < arr.length; i++){
   let minIndex = i
   for(let j = i; j < arr.length; j++){
     let current = arr[j]
     if(arr[minIndex]>current){
       minIndex = j
     }
   }
   //the if condition below is making sure that if the number we comparing the rest of the numbers with is the lowest, we do not need to do the work of swapping because it is already
   //at its right position (index). It just saves from performing one extra unnecesary operation
   if(i !== minIndex) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
 }
 return arr
}

console.log(selectionSort([5,6,-3,4,234,45,12,65,234,5,65,5]))

//unlike other N^2 runtime sort algo, selection sort cannot be obtimized further.
//Regardless of the array given is already sorted or almost sorted, it will run N^2 times.
