// ES6
var x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);
// const keyword used to create a constant varibale
const admNo = 122165;
console.log("Your admission no is: ", admNo);
// admNo = 9000; // throw error here
console.log("Now your admission no is :", admNo);

// var x = function(x,y){
//     return x+y;
// };

const fn = (x, y) => {
  return x + y;
};

console.log(fn(10, 5));

const m1 = ["Jan", "Feb", "Mar"];
const m2 = ["Apr", "May", "Jun"];
const m3 = ["Jul", "Aug", "Sep"];
const m4 = ["Oct", "Nov", "Dec"];

const year = [...m1, ...m2, ...m3, ...m4];
console.log(year);

// const fruits = new Map(["apple",500],["mango",1000],["papaya",200]);
// console.log(fruits);
// console.log(fruits.get("mango"));

const n = new Set();
n.add("a");
n.add("b");
n.add("b");
n.add("c");
console.log(n);

/*Class in JS */
class Pen {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}
const p1 = new Pen("Ball", 10);
const p2 = new Pen("Gel", 20);

console.log("Pen 1: ", p1);
console.log("Pen 2: ", p2);

const work = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is inside promise");
      resolve();
    }, 2000);
  });
};
work()
.then(()=>{
    console.log("Resolved");
})
.catch(()=>{
    console.log("Rejected");
})
