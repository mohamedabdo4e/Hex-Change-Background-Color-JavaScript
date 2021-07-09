const hex = document.querySelector('.color-in');
const btn = document.querySelector('.main-btn');
const body = document.querySelector('body');





let colorHexy = function(){

    let n = (Math.random()*0xfffff*1000000).toString(16);
    
    return '#' + n.slice(0,6);
 }


let changeMe = function(){
    
    body.style.backgroundColor = colorHexy() ;
    hex.textContent = colorHexy() ;


}


btn.addEventListener("click",changeMe);



































