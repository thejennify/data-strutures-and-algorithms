# Arrays
Arrays are a data structure that allows us to store data linearly. 

array manipulation time complexity:

**lookup** - 0(1)
**push** - 0(1)
**insert** - 0(n)
**delete** - 0(n)

*JavaScript array methods*
`push()` - 0(1) - adds a new item to the end of the array, no loopig is required hence why the time complexity is constant
`pop()` - 0(1) - removes an existing element from the end of the array.
`unshift()` - 0(n) - adds a new item at the begining of the array. The time complexity is linear because a loop is performed to shift existing elements to make space for the new addiiton. 
`shift()` - 0(n) - removes the first item of the array 
`splice()` - 0(n) - takes in 3 arguments (start, deleteCount, items) allows us to add or delete items from a particular point  