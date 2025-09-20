/*console.log("hello");

var a="hi";
console.log(a);
var b="hello";
console.log(b); 

let course="cse"*/

/*let age=21
console.log(age);
age=21; 
console.log(age);

//const givename="Tarun";
//console.log(givename);//
// givename="Reddy"; // it will give error
// console.log(givename);   
/*givenname="taru";
console.log(givenname);


//Function
function get_message(name){
    return "Hello "+name+" welcome  ";
}

let welcome_message=get_message("Tarun");
console.log(welcome_message);*/


/*function get_message1(name,roll_No,branch){``
    return "Tharun"+name+" CSM"+branch+"244g5a3315"+roll_No; 
}

let welcome_message1=get_message1("Tharun","244g5a3315","CSM");
console.log(welcome_message1);*/


//operstor
/*let x=age+2;
let y=age-2;
let z=age*2;
let p=age/2;
console.log(x);
console.log(y);
console.log(z);
console.log(p);*/

//calculate area of a rectangle 

/*let l=10;
let b=20;
function rectangle_area(l,b){
        return "length"+l+"breadth"+b+;
}
let rect=rectangle_area(l,b){
    console.log(l*b)
}*/

//factorial of a number
let num=4;
function factorial(num){
    if(num===0){
        return 1;   
    }
    else{
        return num*factorial(num-1);
    }       
}
let fact=factorial(num);
console.log(fact);