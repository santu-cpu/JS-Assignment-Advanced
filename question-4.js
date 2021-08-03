 // Question 4

 function foo1() {
    return {
        bar: "hello"
    };
 }

 function foo2() {
    return
    {
        bar: "hello"
    };
 }

 /* They won't return the same thing. foo1 returns { bar: "hello"},
 but foo2 returns 'undefined' because the keyword 'return' and the 
 return-statement are in different lines. The return-statement should begin 
 on the same line as the keyword.(Linebreak error) */