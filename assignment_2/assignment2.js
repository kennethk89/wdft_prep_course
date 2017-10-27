// Exercise #1
// Write your solution below

var hash = '#';

for (var i=1; i<=7; i++){
   hash = hash * i.length
    console.log(hash);
}

/* 
Write your explanation for Exercise #1 here

I'm trying to find a way to replace 
1
2
3
4
5
6
7
with #'s

In this case, I know that my for-loop produces the numbers in that sequeuce and I'm thinking if i have another variable "hash", then I could find a way to replace the numbers with actual #'s.

*/





// Exercise #2
// Write your solution below

function isEven(number){
    if (number % 2 == 0)
    console.log('the number is even!')
    else 
    console.log('the number is odd!')

} 

console.log(isEven());

/* 
Write your explanation for Exercise #2 here

All even numbers, when divided by 2, produces a remainder of 0. Therefore, the function, isEven, states that if the input number (number) has no remainder, it should print 'the number is even!' whereas it'll print 'the number is odd!' if there is a remainder.
*/
