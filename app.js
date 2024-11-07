// async js

// function asyncFunction() {
//   return new Promise((resolve, reject) => {
//     let result = 0;
//     for (let i = 0; i < 30; i++) {
//       result = result + i;
//     //   if(result > 10) {
//     //     reject("result is greater than 10");
//     //   }
//     }
//     resolve(result);
//   });
// }

// async function testFunction() {
//     try {
//         console.log(1);
//         let result = await asyncFunction()
//         return result;
//     }catch(e) {
//         console.log(e);
//     }
// }

// testFunction().then(result => {
//     console.log(result);
// });


// console.log("this is one");
// asyncFunction().then((result) => {
//   console.log(result);
// } ).catch((error) => {
//     console.log(error);
// });
// console.log("this is two");

// async function getTodo() {
//     try {
//         let res =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         let data =   await res.json()
//         console.log(data);
//     }catch(e) {
//         console.log(e)
//     }
// }

// console.log(1);
// getTodo();
// console.log(2);

async function test() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let data = await res.json();
        return data;
    }catch(e) {
        return e;
    }
}

console.log(1)
test().then(data => console.log(data)).catch(e => console.log(e));
console.log(2)