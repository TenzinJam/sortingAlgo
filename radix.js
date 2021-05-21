//So radix is the only sorting algo I have encountered so far that is efficient and does not use recursion.
//However, unlike other recursion based algo, this needs more than one helper function.
//You need a helper to pick the digit you are trying to sort by
//You need a helper to determine the length of the largest number, which would tell us how many times we need to loop the array.
//Radix is also the only sorting algo that I have encountered so far that does not implement direct comparison between the elements.
// RADIX is therefore a NON-COMPARISON sorting
// still unsure about why using the "new Array" instantiation method gives me the wrong solution.

let print = console.log

function radixSort(numArr){
  let outerlooptimes = longestDigit(numArr)
  for(let i = 0; i < outerlooptimes; i++){
    let bucket = Array.from({length:10}, () => [])
    // let bucket = new Array(10).fill([])
    for(let j = 0; j < numArr.length; j++){
      let digitValue = pickDigit(numArr[j], i)
      bucket[digitValue].push(numArr[j])
    }
    print("buckets", bucket)
    numArr = [].concat(...bucket)
  }
  return numArr
}

function longestDigit(arr){
  let max = 0
  for(let num of arr){
    if(String(num).length > max) max = String(num).length
  }
  return max
}

function pickDigit(num, position){
  let digitValue = (Math.floor(Math.abs(num)/Math.pow(10, position)))%10
  return digitValue
}

print(radixSort([5,6,4,234,45,12,65,234,65,9]))
