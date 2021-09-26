var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(num, index){
  if (num % 3 === 0){
      test[index] = test[index] + 100;
  }
});
console.log(test);

/* Things to note:
*  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
*  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
*  - Outside the loop, you can use `console.log` to verify the `test` variable 

Using "test = test + 100" would not be able to change the value of item
because the `item` is a COPY of actual element, while actual is test[index]


*/