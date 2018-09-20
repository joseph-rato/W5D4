

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
// Array.prototype.myReduce = function (callback[, initialValue])