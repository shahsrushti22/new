//logical operators//
//logical operators are used to combine conditional statements//
//when there are multiple condition then logical operators are used to combine them and return a single boolean value//
//or not and this are the three logical operators in javascript//
//and//
//symbol is &&//
//or//
//symbol is ||//
//not//
//symbol is !//
// and means we use and operator when we want to check if both the conditions are true//
// we can take more than two conditions and check if all the conditions are true then it will return true otherwise it will return false//
//and//
let name ="srushti";
let password = "1234";
console.log(name=="srushti" &&password=="1234");//true
console.log(name=="srushti" &&password=="123");//false// bexause password is not equial to this //
//if condition are not true then it will be the false and all condition has to be the true //
let per=68;
console.log(per>=48)
console.log(per>=48 && per<60 )
//because 60 is not greater than 68//
//or//
//it means only 1 if true from all condition then it will bw ans true //
let m=60;
console.log(m!="" || m>60)//true because m!="" means m not equal to blank thats why its true //
let subject1=90;
let subject2=85;
let subject3=25;
console.log(subject1<35 || subject2<35 || subject3<35)
// ans will be the true because in that 3 1 condition is true //
//not !//
console.group( ! (10==10))
console.group( ! (10==20))
//not means jo true hae wo false kr sakte hai not sae //
// ans will be reverse //






