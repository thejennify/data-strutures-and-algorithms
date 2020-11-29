// 0(1) - Constant Time
const numbers = [0,1,2,3,4,5,6,7,8,9];
const printNumbers = () => {
  console.log(numbers[0])
}

//####################################

// 0(n) - Linear Time 
const friendsList = ['nobody']
const findFriends = friends => {
  friends.forEach( friend => {
    if (friend === 'nobody') {
      console.log('you are alone');
    }
  })
}

function funChallenge(input) { //BIG 0(3 + 4n) simplied to 0(n)
  let a = 10; //0(1)
  a = 50 + 3; //0(1)

  for (let i = 0; i < input.length; i++) { //0(n)
    anotherFunction(); //0(n)
    let stranger = true; //0(n)
    a++; //0(n)
  }
  return a; // 0(1)
}

function anotherFunChallenge(input) { //BIG 0(4 + 7n) simplified to 0(n)
  let a = 5; // 0(1)
  let b = 10; // 0(1)
  let c = 50; // 0 (1)
  for (let i = 0; i < input; i++) { //0(n)
    let x = i + 1;00 //0(n)
    let y = i + 2; //0(n)
    let z = i + 3; //0(n)

  }
  for (let j = 0; j < input; j++) { //0(n)
    let p = j * 2;//0(n)
    let q = j * 2; //0(n)
  }
  let whoAmI = "I don't know"; //0(1)
}