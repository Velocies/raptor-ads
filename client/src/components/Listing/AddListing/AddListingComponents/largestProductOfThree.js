function largestProductOfThree (array) {
  // Write your code here, and
  // return your final answer.
  const allNegatives = array.reduce((bool, element) =>{
    if (element > 0) {
      bool = false;
    }
    return bool;
  }, true);
  let newArr = [].concat(array);

  if (!allNegatives) {
    newArr = array.sort((a,b) => b - a);
    const bottoms = [].concat([newArr[newArr.length-2], newArr[newArr.length-1]]);
    const alternateArr = [].concat(newArr);
    let bigNegatives = 0;

    for (let i = 0; i < bottoms.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (bottoms[i] * -1 > alternateArr[j]) {
          alternateArr.splice(j, 1, bottoms[i]);
          bigNegatives++;
          break;
        }
      }
    }
    if (bigNegatives >= 2) {
      newArr = alternateArr;
    }
  } else {
    newArr = array.sort();
  }

  return newArr.slice(0,3).reduce((product, num)=>{
    return product *= num;
  }, 1);
};



const arr = [ -5, -1, -3, -2, -4 ];
console.log(largestProductOfThree(arr));

/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

Examples
Input Output
array:
[ 2, 1, 3, 7 ]  42
array:
[ 0, 2, 3 ] 0
*/