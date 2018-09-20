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
//   
// }