const lastIndexOf = function(array, query){
  let foundMatch = false;
  let result = 0;
  for(var i = array.length; i >= 0; i--){
    if (array[i] === query){
      result = i;
      foundMatch = true;
      break;
    }
  }
  if (foundMatch){
    return result;
  }else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
