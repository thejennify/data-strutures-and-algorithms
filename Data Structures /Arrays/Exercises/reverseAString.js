const reverse = (string) => {
    let newString=[]; 
    // steps:
    // 1. check input
    if(!string || string.length < 2 || typeof string !== '') {
        return 'invalid input';
    }
    // loop through the string from end to start and push it to the empty array
    for (i = string.length - 1; i >= 0; i--) {
        newString.push(string[i])
    }

    return newString.join('');
}

//can be shorten with ES6 and JavaScript methods
const reverse1 = string => [...string].reverse().join();
const reverse2 = string => string.split('').reverse().join('');
