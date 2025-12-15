let btns=document.querySelectorAll('button');

for(btn of btns){
    // btn.onclick=showHello;
    // btn.onmouseenter=function(){
    //     console.log("on mouse enter");
    // }

    btn.addEventListener("click",showHello);
    btn.addEventListener("click",showName);
}

function showHello(){
    alert("hello")
}

function showName(){
    alert("name")
}