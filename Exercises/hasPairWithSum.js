// check for a pair of elements in an array whose sum is equal to given sum

function hasPairWithSum(arr, sum){
    //##brute froce approach -> nested loop; not optimal in terms of time complexity

    //##second apprach: 
    //loop through the array and subtract the target from each element of the array
    //pass the value to the set 
    //check if the set has any element in the array and return true if there is 
    //otherwise return false

    //Questions?
    // Can elements in the array are always going to sum up to the total?

    //solution
    function hasPairWithSum2(arr, sum){
        const mySet = new Set();
        const len = arr.length;
        for (let i = 0; i < len; i++){
          if (mySet.has(arr[i])) {
            return true;
          }
          mySet.add(sum - arr[i]);
        }
        return false;
      }

}
//Big 0(n)