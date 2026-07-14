//comparison operators//
//means comparing two values and returning a boolean result (true or false)//
//there are symbol of the comparison operators//
// ==, !=, ===, !==, <, >, <=, >= //
let n=10;
let m=20;
console.log(n==m) // false//
//false because the value of n is not equal to the value of m//
//== its for checking the value of two variables, it does not check the data type of the variables//
//if the value are equal it will return true, if not it will return false//
let s=10;
let r="10";
console.log(s==r) // true//
//true because the value of s is equal to the value of r, even though their data types are different (number vs string)//
//=== its for checking both the value and the data type of two variables//
//===//
//it will return true if both the value and the data type are equal, otherwise it will return false//
let a=10;
let b="10";
console.log(a===b) // false//
//false because the value of a is equal to the value of b, but their data types are different (number vs string)//
//(!=)//
console.log(n!=m) // true//
//true because the value of n is not equal to the value of m//
//!= its for checking if the value of two variables are not equal, it does not check the data type of the variables//  
let c=10;
let d=10;
console.log(c!=d) // false//
//false because the value of c is equal to the value of d//
//(!==)//
let e=10;
let f="10";
console.log(e!=f) // false//
console.log(e!==f) // true//
//true because the value of e is equal to the value of f, but their data types are different (number vs string)//

//!== its for checking if the value and the data type of two variables are not equal//
//if the value and the data type are not equal it will return true, otherwise it will return false//
//>//
//it is for checking if the value of the left variable is greater than the value of the right variable//
let g=20;
let h=10;
console.log(g>h) // true//
let i=10;
let j=20;
console.log(i>j) // false//
//because the value of i is not greater than the value of j//
//>=//
//it is for checking if the value of the left variable is greater than or equal to the value of the right variable//
let per=60;
console.log(per>=60) // true//
// it means the value of per is greater than or equal to 60//
let k=55;
console.log(k>=60) // false//
console.log(k>=50) // true//
//<//
//it is for checking if the value of the left variable is less than the value of the right variable//
let l=10;
let o=20;
console.log(l<o) // true//
//because the value of l is less than the value of o//
let p=20;
let q=10;
console.log(p<q) // false//
//because the value of p is not less than the value of q//
let ss=30;
let pp=40;
console.log(ss<pp) // true//
//because the value of ss is less than the value of pp//
let rr=50;
let tt=50;
console.log(rr<=tt) // true//
//because the value of rr is less than or equal to the value of tt//