
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");


let collapse_div1=document.getElementById("home");
let collapse_div2=document.getElementById("resume");
let collapse_div3=document.getElementById("work");
let collapse_div4=document.getElementById("contact");

function do_something(element){

    console.log(element)

    if(element==btn1){
        console.log("btn1");
        
        collapse_div2.classList.remove("show");
        collapse_div3.classList.remove("show");
        collapse_div4.classList.remove("show");
       
        
      }
      else if(element==btn2){
        console.log("btn2");
        
        collapse_div1.classList.remove("show");
        collapse_div3.classList.remove("show");
        collapse_div4.classList.remove("show");
      }
      else if (element==btn3){
        console.log("btn3");

        collapse_div1.classList.remove("show");
        collapse_div2.classList.remove("show");
        collapse_div4.classList.remove("show");
      }
      else if (element==btn4){
        console.log("btn4");
        
        collapse_div1.classList.remove("show");
        collapse_div2.classList.remove("show");
        collapse_div3.classList.remove("show");
    
        }
    
}