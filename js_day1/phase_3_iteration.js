Array.prototype.bubbleSort = function(callback){
  let swich = true;
  for (let i = 0; i < this.length - 1; i++)
  for (let j = i + 1; j < this.length; j++){
  if (swich) {
    swich = false;
    if (callback(this[i],this[j])){
      this[j] = this[i];
      this[i] = this[j];
      swich = true;
    }
    
  }  
    
  }
};