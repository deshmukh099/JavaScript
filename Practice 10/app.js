let h1=document.querySelector("h1");

function changeColor(color, delay, changeNextColor){
    setTimeout(()=>{
        h1.style.color=color;
        if(changeNextColor) changeNextColor();
    }, 1000)
}

changeColor("red", 1000, ()=>{
    changeColor("orange", 1000, ()=>{
        changeColor("green", 1000);
    })
})

//call back nesting -> This is Called CallBack Hell