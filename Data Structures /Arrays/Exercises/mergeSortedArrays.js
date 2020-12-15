function mergeSortedArrays(arr1, arr2) {
    //assume they are integers 
    const len = arr1.length + arr2.length;
    let mergedArr = [];
    let i = 0;
    let j = 0;

    while (mergedArr.length < len) {
        if (!arr2[j] || arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        }else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    return mergedArr;
}
//Time complexity of 0(n)

//or 
const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a,b) => a-b);
//0(n log n)