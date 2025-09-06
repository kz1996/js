// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
0.30000000000000004
Because js use IEEE754 double-precision floating point values to stored. so the output will very close to 0.3 but will not === 0.3.

console.log(0.1 + 0.2 == 0.3);
false
== will compare type and value


console.log(1 +  "2" + "2");
122
1+"2" goes to "12" js will covent the number1 to shring'1'
'12'+'2' is two string merage.


console.log(1 +  +"2" + "2");


console.log(1 +  -"1" + "2");

console.log(+"1" +  "1" + "2");

console.log( "A" - "B" + "2");

console.log( "A" - "B" + 2);

console.log("0 || 1 = "+(0 || 1));

console.log("1 || 2 = "+(1 || 2));

console.log("0 && 1 = "+(0 && 1));

console.log("1 && 2 = "+(1 && 2));

console.log(false == '0')

console.log(false === '0')
