console.log("welcome to JAVASCRIPT");
// let a=100,b=50;
// if(a>b){
//     console.log("a is greater");
// }
// else if (b>a)
// {
//     console.log("b is greater");
// }
// let a=10;
// let a=20;
// console.log("a value is="+a);
//let collegeName="gnit college";
// console.log(collegeName);
// console.log(collegeName.toLowerCase());
// console.log(collegeName.toUpperCase());
// console.log(collegeName.length);
// //let collegeName=new String("gnit college");
// console.log(collegeName);
// console.log(collegeName.toLowerCase());
// console.log(collegeName.toUpperCase());
// console.log(collegeName.length);

// let collegeName=new String("gnit college");
// console.log(collegeName.startsWith("gnit"));
// console.log(collegeName.startsWith("Gnit"));
// console.log(collegeName.startsWith("college"))


// class Employee
// {
//     displayInfo()
//     {
//         console.log("hi this is display method")
//     }
// }
// let emp=new Employee();
// emp.displayInfo();



// class Employee
// {
//     constructor()
//     {
//      this.id=101;
//      this.ename="Ajay"
//     }
//     displayInfo()
//     {
//         console.log(this.id+" "+this.ename);
//     }
// }
// let emp=new Employee();
// emp.displayInfo();


// class Employee
// {
//     constructor(id,ename)
//     {
//      this.id=id;
//      this.ename=ename;
//     }
//     displayInfo()
//     {
//         console.log(this.id+" "+this.ename);
//     }
// }
// let emp=new Employee(1001,"rajesh");
// emp.displayInfo();


// class Employee
// {
//     id=1001;
//     ename="vinay kumar";
//     displayInfo()
//     {
//         console.log(this.id+" "+this.ename);
//     }
// }
// let emp=new Employee();
// emp.displayInfo();

//for EACH loop

// x=[10,20,30,40];
// for(let i of x)
// {
//     console.log(i);
// }


// function displayInfo()
// {
//     console.log("hi this is display function")
// }
// displayInfo();

// function rest(...args){
//     let result=0;
//     for(let arg of args)
//     {
//         result=result+arg;
//     }
//     console.log("the final result is="+result)
//     }
//     rest(10,20,30,40,50);

//     const arr=["one","two","three"];
// const newArray=["four",...arr];
// console.log(newArray);


// console.log("this is firstline of code")

// const myFunction=()=>{
//     let sum=0;
//  for(let i=1;i<=1000;i++){
//     sum=sum+i;
//  }
//  console.log(sum);
// }
// myFunction();

// console.log("this is secondline of code")



// console.log("this is firstline of code")

// const myFunction=()=>{
//     let sum=0;
//  for(let i=1;i<=1000000;i++){
//     sum=sum+i;
//  }
//  console.log(sum);
// }
// myFunction();

// console.log("this is secondline of code")


//ASYNC/AWAIT

async function displayInfo()
{
 x=await 10+20;
 return x;
}
let result=displayInfo();
result.then((data)=>{
    console.log(data)
})
result.catch((error)=>{
    console.log(error)
})