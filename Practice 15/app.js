let h1=document.querySelector("h1");
function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve();
        }, delay);
    });
}

async function demo(){
    await colorChange("red", 1000);
    await colorChange("green", 1000);
    await colorChange("blue", 1000);
    await colorChange("yellow", 1000);
    await colorChange("pink", 1000);
}

demo();