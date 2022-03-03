//Business Logic

export function beepBoop(userNum) {
  const roboArray = [];
  // const userNum = roboArray;
  for ( let i = 0; i <= userNum ; i++) {
    if(i.toString().includes(3)) {
      roboArray.push("Won't you be my neighbor?");
    } else {
      roboArray.push(i.toString());
    }
  }
    return roboArray;
  }


  // function createArray(num) {
  //   let userArray = [];
  
  //     for (let i = 0; i <= num; i++) {
  //       if (i.toString().includes("3")) {
  //         userArray.push("Won't you be my neighbor?");
  //       } else {
  //         userArray.push(i.toString());
  //       }
  //     }
  // return userArray;
  // }



  
  
  // function createArray(num) {
  //   let userArray = [];
  
  //   if(num) {
  //     for (let i = 0; i <= num; i++) {
  //       if (i.toString().includes("3")) {
  //         userArray.push("Won't you be my neighbor?");
  //       } else if (i.toString().includes("2")) {
  //         userArray.push("Beep");
  //       } else if (i.toString().includes("1")) {
  //         userArray.push("Boop");
  //       } else {
  //         userArray.push(i.toString());
  //       }
  //     }
  //   }
  // return userArray;
  // }