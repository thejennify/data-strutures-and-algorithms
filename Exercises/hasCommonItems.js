//Given 2 arrays, create a function that let's a user know (true/false) where these 2 arrays contain any common items.

//test 1 
//array1 = ['a', 'b', 'c', 'x']
// arry2 = ['z', 'y', 'i'] 
//should return false.

//test2 array1=['a','b','c','x'] array2=['z','y','x'] should return true

//brute force approach:  nested loop, not ideal because it will return a Big O of O(a * b) a represents the time complexity of the first loop and b for the second loop, since the two array differ in legnth, we cannot sum them.

//Better sololution:

//### Hash table (Object)

function conatinsCommonItem2(arr1, arr2) {
    //loop through first array and create an object with its properties
    // loop through secon array and check if item in second array exists in the object
    //if it exists return true else return false
    let map = {}
    for( let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]){
            map.arr1[i] = true;
        }
    }

    for( let j = 0; i < arr2.length; j++) {
        if(map.arr2[j]) {
            return true
        }
    }
    return false
}

//can be shorten to 
function conatinsCommonItem2(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}
//Big 0(a + b)

//##### JavaScript method explanation 
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.