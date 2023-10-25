
//question 1 :function basics

function calculateArea(length,width){

    let calculateArea=length*width;

    console.log(calculateArea);

}
calculateArea(18,70)


//question 2 :scope exploration


var globalvar=90;

function printGlobalVar() {

    console.log(globalvar);
}
printGlobalVar();

console.log(globalvar);

function myfunction(){

    var localvar=80;

    console.log(localvar);

}

myfunction()

printGlobalVar()


myfunction()

//global variable are accessible to outside and within the function in which they are defined 
//thus are said to have global function scope.
//local variabe are only accessible within the function in which are defined,thus the have local function scope.

// question 3 :closures and private counters

function outer(){
    var outVar=6

    function inner(){
        console.log(outVar)
    }
    return inner
}

var closureFunction=outer()
closureFunction()

let count4=2;

function counter(){
    var count=3;
    function increment(){
        count4++;
        console.log(count4);
    }
    return increment;
}
var incrementCounter=counter();
incrementCounter()
incrementCounter()
incrementCounter()
incrementCounter()
incrementCounter()