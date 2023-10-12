// const amount =1;
// if(amount<10){
//     console.log("small");
// }
// else{
//     console.log("larger number");
// }
// console.log(`this is my first node project`);

// console.log(__dirname);
// setInterval(()=>{
//     console.log("hello world")
// },10)

//modules
// const secret='SUPER SECRET'
// const john ='john'
// const peter='peter'
// const sayHi=(name)=>{
//     console.log(`hello ${name}`);
// }

const  _ =require('lodash');

const items =[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items);
console.log(newItems);

