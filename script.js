let background=document.body;
let btn1 = document.getElementById("btn1");
let btn2 =document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4= document.getElementById("btn4");
let display1 = document.getElementById("display1");
let display2=document.getElementById("display2");
let Reset=document.getElementById("reset");

btn1.addEventListener("click",() =>{
  interval1 = setInterval(() =>{
        display1.innerText=randomColor();
        background.style.backgroundColor=randomColor();
    },1000)
});
btn3.addEventListener("click",() =>{
  interval2=  setInterval(() =>{
        display2.innerText=`${randomColor()}and ${randomColor()}`;
        background.style.background=`linear-gradient(to right,${randomColor()},${randomColor()})`;
    },1000)
});
btn2.addEventListener("click",() =>{
    clearInterval(interval1);
});
  
btn4.addEventListener("click",() =>{
        clearInterval(interval2);
 });    
const randomColor = function(){
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    const alpha =Math.random();
    return rgba = `rgba(${red},${green},${blue},${alpha})`;
}
Reset.addEventListener("click",() =>{
    display1.innerText="none";
    display2.innerText="none";
    background.style.backgroundColor="none";
    background.style.background="none";
})