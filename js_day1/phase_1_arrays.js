Array.prototype.uniq2 = function () {
  let result = []; 
  for (let i = 0; i < this.length; i++){
    if (result.includes(this[i])) {
      continue;  
    }
    else {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function () {
  let result = [];
  for (let i = 0; i < this.length-1; i++)
  for (let j = i + 1; j < this.length; j++) {
    
    if (this[i] + this[j] === 0) {
      result.push([i, j]);
    }
    
  }
  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  for (let i = 0; i < this[0].length; i++) {
    
    const subarr  = [];
    for (let j = 0; j < this.length; j++) { 
      subarr.push(this[j][i]);
  }
    result.push(subarr);
  }
  // 
  // function subArray(arr[j][i]) {
  //     const subarr = [arr[j][i]]
  //
    
    // add i into result to make the column of the transpose 
    // go through each of the array and add the column into the array 
return result;
    
};













// function arrayUnique() {
// 
// }
// function Array(nums) {
//   this.nums = nums;
// }

// 
// Array.prototype.uniq = function (callback) {
//   const result = [];
//   this.forEach(callback(result));
//   return result;
// };
// 
// function pushUniq(num, result) {
//   if (result.includes(num)) {
//     console.log('copy');
//   }
//   else 
//     result.push(num);
// }



// function isIncluded(num) {
//   if (ans.includes(num)) {
//     console.log('copy');
// 
//   }
//   ans.push(num);
// }
// 
// 
// 
// // 
// function uniq(arr) {
//   const result = [];
// 
// 
//   arr.forEach(pushUniq);
// }

