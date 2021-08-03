// Question 3

/* There are lots of mistakes in this question.Full of errors. Assuming the mistakes
 are typos....it would return 'Rohit'. */

// The question
 var Employee = {

 company: 'Rohit'

 }
 var Emp1 = Object.create(employee); // employee undefined
 delete Emp1.company 
 Console.log(emp1.company); // emp1 undefined ,c is capital in console 

// My answer
console.log(Emp1.company) // returns 'Rohit' as it is an inherited property,can only be deleted from prototype.
