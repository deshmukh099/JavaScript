let h1=document.querySelector('h1');
let h3=document.querySelector('h3');
let p=document.querySelector('p');
let button=document.querySelector('button');

function addColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

h1.addEventListener("click", addColor);
h3.addEventListener("click", addColor);
p.addEventListener("click", addColor);
button.addEventListener("click", addColor);

