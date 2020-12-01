function encouragement (n) {
    for (let i = 0; i < n.length; i++) {
        console.log("You've got this!");
    }
}

encouragement([1,2,4,5,6,7,8,9]); //Space complexity:  0(1)  because when it comes to space complexity we do not consider the input, rather, we consider the amount of memory allocation. In the example above, the stack only needs to make space for 1 function hence why its pscae complexity is 0(1);

function presentYourself(n) {
    let presentation = [];
    for (let i=0; i < n; i++) {
        presentation[i] = 'I am Jennifer'
    }
    return presentation;
}

presentYourself(5);
//Space Comlexity = 0(n)
//This example takes a data struture, an array, and for every loop, it stores a new data in the array. The greater the input the more data we will have to store in the presentaion array. Ex: if we perform 5 loops, we will need 5 spaces in the array, 10 loops needs 10 spaces...