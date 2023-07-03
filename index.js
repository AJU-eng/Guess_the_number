'Use-Strict';
// import { random } from "module";

var btn1 = document.getElementById("check_btn");

btn1.addEventListener("click", myFunction);
var A =Math.floor(Math.random() * 100) + 1 ;

function myFunction(){
    var guess = document.getElementById("input_text").value

    if (guess==A) {
        
       document.getElementById("status").innerHTML="🎉 Correct Answer";
       document.getElementById("section").style.backgroundColor="green"
       document.getElementById("num").innerHTML=A

    }
    else if(guess<A)
    {
       document.getElementById("status").innerHTML="The number is low ";
    }
    else if(guess>A)
    {
        document.getElementById("status").innerHTML="The number is too high";
        document.getElementById("section").style.backgroundColor="red"

    }
    
    console.log(A);


}