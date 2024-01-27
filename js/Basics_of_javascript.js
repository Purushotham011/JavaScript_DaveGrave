// const n="Purushotham";
// let x=Math.floor(Math.random()*n.length);
// console.log(x);
// console.log(n.charAt(x));

// let cust = true
// let soup = "Chicken Soup"
// let reply
// if (cust){
//     reply = `No ${soup} for you.!`;

// }
// console.log(reply)

// let v=confirm("select your option")
// console.log(`v : ${v}\ntype : ${typeof v}`)

// let n=prompt("Enter Your Name : ")
// console.log(n)

// let n=0;
// while(n<5) {
//     console.log(n);
//     n++;
// }

// function sum(sum1 , sum2){
//     console.log(sum1)
//     console.log(sum2)
//     return (sum1 + sum2)
// }
// ch = confirm("Enter for addition")
// if (ch===true){
//     s1= prompt("Enter the number : ")
//     s2= prompt("Enter the number : ")
//     console.log(sum(s1,s2))
// }
// else {
//     console.log("Maybe Later!")
// }

// function dom(email) {
//     return email.slice(0, email.indexOf("@"))
// }

// console.log(dom("sain@gamil.com"))

// const titleCase = (n) =>{
//     return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
// }

// console.log(titleCase("saIN"))

// const ary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
// 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// let aryA = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// console.log(aryA[0]);
// console.log(aryA);
// console.log(aryA.splice(1, 3, 404));
// console.log(aryA);
// let new_s = aryA.join();
// console.log(new_s);
// console.log(new_s.split(","));

// const a=[]
// const b=[]

// const a = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
// const b = ["elephant",  "flamingo",  "giraffe",  "hippopotamus",  "ibis",  "jaguar",  "koala",];

// const c = ["Football", "Basketball", "Tennis", "Swimming", "Cricket"];
// const d = ["T-shirt", "Jeans", "Sneakers", "Hoodie", "Shorts"];

// const x=[a,b]
// const y=[c,d]

// console.log(x)
// console.log(y)

// console.log(x[1][2])
// console.log(y[1][4])

// const s = [x,y]
// console.log(s[0][1][4])
// console.log(s[1][1][2])



// console.log(a.concat(b));

// let spread_op = [...a, ...b];
// let samp = [a, b];
// console.log(samp);
// console.log(spread_op);

// const vehicle = {
//     wheels : 4,
//     engine: function() {
//         return "Vrrooom !";
//     }

// }

// const truck = Object.create(vehicle);
// truck.doors = 2 
// console.log(truck);
// console.log(truck.wheels)
// console.log(truck.engine())
// const car = Object.create(vehicle)
// car.doors = 4
// car.engine = function() { return "Whoosh"}
// console.log(car.engine());
// console.log(car.wheels);

// const band = {
//     vocals : "robert plant",
//     guitar : "jimmy page",
//     bass : "john paul jones",
//     drums : "John bonham"
// }

// delete band.drums;
// console.log(band.hasOwnProperty("drums"))
// console.log(Object.keys(band))
// console.log(Object.values(band))

// for (let job in band) {
//     console.log(` On ${job},its ${band[job]}!`)
// }

// class Pizza {
//     constructor (pizzatype, pizzasize)
//     {
//         this.type = pizzatype;
//         this.size = pizzasize;
//         this.crust = "Original";
//         this.topping = [];

//     }
//     getCrust() { 
//         return this.crust;
//     }
//     setCrust(pizzaCrust) {
//         this.crust =  pizzaCrust;
//     }
//     getTopping() {
//         return this.topping;
//     }
//     setTopping (topping) {
//         this.topping.push(topping);
//     }
//     bake () {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
//     }
// }

// const myPizza= new Pizza("pepperoni", "small");
// myPizza.setCrust("THIN");
// myPizza.bake();
// myPizza.setTopping("sausage");
// myPizza.setTopping("Olive");
// console.log(myPizza.getCrust());
// console.log(myPizza.getTopping())


//Example for private variables

/*class Pizza 
{
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() { 
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust =  pizzaCrust;
    }
    hereYouGo() { 
        console.log( `Here's your ${this.crust} ${this.#sauce} pizza.`); 
    }
}

const myPizza = new Pizza ("large");
myPizza.hereYouGo();
console.log(myPizza.crust); */

// const myObj = {
//     name : "Sain",
//     hobbies : ["eat", "sleep","code"],
//     hello : function () {
//         console.log("Hello!");
//     }
// };
// console.log(myObj);
// console.log(myObj.name);
// myObj.hello();
// console.log(typeof myObj);

// const sendJSON = JSON.stringify(myObj);
// console.log(sendJSON);
// console.log(typeof sendJSON);
// console.log(sendJSON.name);

// const receiveJSON = JSON.parse(sendJSON);
// console.log(receiveJSON);
// console.log(typeof receiveJSON);

//javascript errors and erroe handlinig

// const makeError = () => {
//     try {
//         throw new customError("This is a customError!")
//     }
//     catch (err){
//         console.error(err.name);
//         console.error(err.message);
//         console.error(err.stack);
//     }
//     finally {
//         console.log("...Finally!");
//     }
// }
// makeError()

// function customError(message) {
//     this.message = message;
// console.warn("Kala Ana Kal")
//     this.name = "customError" ; 
// }
//     this.stack = `${this.name}: ${this.message}`

