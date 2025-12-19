let h1=document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}

changeColor("red", 1000)
.then(()=>{
    console.log("red color changed")
    return changeColor("ornage", 1000); 
})
.then(()=>{
    console.log("ornage color changed")
    return changeColor("green", 1000); 
})
.then(()=>{
    console.log("green color changed")
    return changeColor("blue", 1000); 
})
.catch(()=>{
    console.log("Error");
})