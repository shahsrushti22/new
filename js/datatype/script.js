// primitive data types//
//number//
let num=20;
console.log(num)
//if we want to check the type //
console.log( typeof num)
//if you write in the single and double cotation then it will be the string //
let num2="21";
console.log(num2,typeof num2)
//see above is a string its number but is in string si thats why type will string.//
let num3=20.5;
console.log(num3)
console.log(typeof num3)
//string//
let cname="ws";
let cnameone="ws";
let cnametwo=`ws`;
console.log(cname, typeof cname)
//string is a collection of characters and it is used to store text. and it is immutable.
//and string is show in the double or single quotes also ``(means template literals) //
//boolean//
//boolean is a data type that can have one of two values: true or false. It is often used in conditional statements and logical operations.//
//boolean is used to represent the truth value of an expression.//
//true : mathmatical value is one and false is zero.//
let s=true;
console.log(s,typeof s)
let s1=false;
console.log(s1,typeof s1)
console.log(s+5)
console.log(s1+5)
//in above example we can see that true is 1 and false is 0. so when we add 5 to true it will be 6 and when we add 5 to false it will be 5.//
console.log(s*5) // s=1 because true is 1 so 1*5=5//
console.log(s1*5) // s1=0 because false is 0 so 0*5=0//
//null//
//null is a special value that represents the absence of any object value. It is often used to indicate that a variable has no value or that an object property does not exist.//
let n=null;
console.log(n,typeof n)
//it shows the type of null is object but it is not an object it is a primitive value.//
//it shows the type :object in output //
//undefined//
//undefined is a special value that indicates that a variable has been declared but has not been assigned a value. It is also the default return value of functions that do not explicitly return a value.//
let u;
console.log(u,typeof u)
//it shows the type of undefined is undefined.//
//symbol//
//symbol is a primitive data type that was introduced in ECMAScript 2015 (ES6). It is used to create unique identifiers for object properties. Each symbol value is unique and immutable, meaning that it cannot be changed once it is created.//
let uid=Symbol("123");
let cid=Symbol("123");
console.log(uid,typeof uid)
console.log(cid,typeof cid)
console.log(uid===cid) // false, as each Symbol is unique//
// false because each symbol is unique even if they have the same description.//
//bigint//
//bigint is a primitive data type that was introduced in ECMAScript 2020 (ES11). It is used to represent integers that are too large to be represented by the Number data type. BigInt values can be created by appending the letter "n" to the end of an integer literal or by using the BigInt() constructor.//
let bigint=888888888888888888888888888888888888888888888888888;
console.log(bigint,typeof bigint)
let bigint2=BigInt(888888888888888888888888888888888888888888888888888n);
console.log(bigint2,typeof bigint2)
//so in above example we can see that the bigint is used to represent integers that are too large to be represented by the Number data type. and it is created by appending the letter "n" to the end of an integer literal or by using the BigInt() constructor.//
//primitives are immutable//
//primitives data types :
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol
7. bigint
//non-primitive data types//
1. object
2. array
//non-primitive data types are mutable//