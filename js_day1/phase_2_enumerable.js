

Array.prototype.myEach = function (callback){
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

  // this.forEach(callback);


// 
// 
Array.prototype.myMap = function (callback){
  const ans = [];
  for (let i = 0; i < this.length; i++){
    ans.push(callback(this[i]));
  }
  return ans;
};


// 
Array.prototype.myReduce = function (callback, num) {
  let ans = 0;
  if (num) {
      ans = num;
  }
  ans = ans + this.myEach(callback);
  // for (let i = 0; i < this.length; i++) {
  //   ans = ans + callback(this[i]);
  // }
  return ans;
};

// Is this the right way to pass in optional num how do we set if it we do callback[,num] because it says this is bad syntax and doesnt like the []!
// need guidance
