

function input(a){
    document.querySelector(".output").value+=a
}
function backspace(){
    var expression=document.querySelector(".output").value
    expression= expression.substr(0,expression.length-1)
    document.querySelector(".output").value=expression
}
function clearIt(){
    document.querySelector(".output").value=""
}
function solveIt(){
    let exp
    exp=document.querySelector(".output").value
    let b= eval(exp)
     document.querySelector(".output").value=b
}

var btn=document.querySelectorAll(".btn")
btn.forEach(btn => {btn.addEventListener("mousedown",chngClr1)});
btn.forEach(btn => {btn.addEventListener("mouseup",chngClr2)});
btn.forEach(btn => {btn.addEventListener("mouseout",chngClr2)});

function chngClr1()
{
    this.style.background="aquamarine"  
   
}

function chngClr2()
{
    this.style.background="black"
    
}







      