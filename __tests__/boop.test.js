import  { beepBoop } from './../src/js/boop.js';

// function beepBoop(userNum) {
//   const roboArray = [];
//   if(isNaN(userNum)) {
//     roboArray.push("Please insert a *bleeping* NUMBER!");
//   } else{
//     for ( let i = 0; i <= userNum ; i++) {
//       if(i.toString().includes(3)) {
//         roboArray.push("Won't you be my neighbor?")
//       }else if (i.toString().includes(2)) {
//         roboArray.push("Boop!")
//       }else if (i.toString().includes(1)) {
//         roboArray.push("Beep!")
//       }else {
//     roboArray.push(i);
//       }
//     }
//   }
//     return roboArray;
//   };

describe('beepBoop', () => {
  test('should return an array of numbers', () => {
    // const roboArray = [];
    const userNum = 2;
    expect(beepBoop(userNum)).toEqual(["0", "1", "2"])

    // for (let i = 0; i <= userNum; i++) {
    //   roboArray.push(i);
    // 
  });
  test('should replace any number containing a 3 will be replaced with "Wont you be my neighbor?"', () =>{
    const userNum = 3;
    expect(beepBoop(userNum)).toEqual(["0", "1", "2", "Won't you be my neighbor?"])
  });
});


