// let name = "mgmg";//string
// let age = 23;//number -> integer
// let price = 999.99;//number -> float
// let isMarried = true;//boolean
// let cup = null;//null
// let box;//undefined

// expression vs statement


//Operator
// +,-,*,/,%,** (Arithmatic Operator -> value)
// console.log(2 ** 4);//2 * 2 * 2 * 2 = 16

//comparison -> boolean
// (>,<,==,!=,>=,<=)


// = (assigment operator) 
//JS case sensitive
// let name = "hLaing min than"

// == (equal to)
// console.log(name == "hlaing min than")

// console.log(2 == "2"); //not same data type, but same value ->true
// console.log(2 === "2"); //not same data type, but same value ->true

//operator precedence`
// console.log(10 * 5 + 4 - 2);


// increment and decrement
// let a = 10; //

// a = a+1; //increment
// a ++; //increment
// a +=1; //increment

// a --;
// a -=3;
// a = a -5;

// console.log(a)

//Logical Operator

//15 pro max giveaway program (a person who is 18 or older and single)

// function luckyDraw(age,single = false){
//     if(age >= 18 && single) {
//         console.log("15 pro max winner");
//     }
//     else if(single) {
//         console.log("14 pro max winner");
//     }
//     else {
//         console.log("not a winner");
//     }
// }

// console.log(luckyDraw(100));

// luckyDraw(20,true);
// luckyDraw(19,false);



// console.log('the answer is '+sum(5,6));
// console.log(sum(15,16));


// statement vs expression
// let luckyDraw = function(age,single = false){ 
//     if(age >= 18 && single) {
//         console.log("15 pro max winner");
//     }
//     else if(single) {
//         console.log("14 pro max winner");
//     }
//     else {
//         console.log("not a winner");
//     }
// }
// luckyDraw(20);

//HOF (high order function) or callBack function

// let twice = function(x, modifier){
//     let result = modifier(x);
//     return result * 2;
// }

// let result = twice(250, (x) =>  x - 200 );

// function sayHello(name, greeting) {
//     greeting();
//     console.log("hello "+name);
// }

// sayHello("hlaing min than",function() {
//     console.log("mingalar par")
// });
// sayHello("hlaing min than",function() {
//     console.log("Ni Hou Ma")
// });

// let sum = (a,b) => a+b

// console.log(sum(19,6));

// array

// let names = ["hlaing min than","mgmg","zaw zaw"];

// names[4] = "kyaw kyaw";
// console.log(names);\


// Without destructuring
// let numbers = [1,2,3,4,5,6,7,8,10];

// let updatedNumbers = numbers.map((number) => {
//     return number * 10;
// })
// let evenNumbers = numbers.filter((number) => number % 2 === 0);



// let names = ["hlaing min than", "mgmg","min thant"];

// let namesIncludeMinWord = names.filter((name) => name.includes("min"))

// console.log(namesIncludeMinWord)



// (everything is object)
// object

let person = {
    name: "hlaing min than",
    age: 23,
    isMarried: true,
    eat: () => {
        console.log("person is eating");
    }
}
person.name = "mgmg";
person.hobby = "coding";

person.eat()