
//explicit type annotations
function add(a: number, b: number): number {
    return a + b;
  }

//Function with optional parameters
 function greet(name:string,age?: number): void {
       
        if(age)
        {
           console.log('Hello, ${name}! You are ${age} years old.')
        }
        else
        {
            console.log('Hello, ${name}!')
        }

 }
 
 //with default parameter values.
 function multiply(a:number,b:number=1):number{
      return a*b
 }

 //with rest parameters
 //Rest parameters in TypeScript allow you to represent an indefinite number of arguments as an array.
 function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log(sum(1, 2, 3, 4, 5));
  console.log(sum(1, 2, 3, 4, 5,6,7,8,9,10,11,12,13));


  //generic function in tyepscript.
  function swap<Type>( arr: Type[],index1:number,index2:number ):void{
       
         const temp =arr[index1]
         arr[index1]=arr[index2]
         arr[index2]=temp


  }

  const numbers: number[] =[1,2,3,4,5,6]
  swap<number>(numbers,0,1)
  console.log(numbers)
  
const names: string[] = ["Alice", "Bob", "Charlie"];
swap<string>(names, 0, 2);
console.log(names);