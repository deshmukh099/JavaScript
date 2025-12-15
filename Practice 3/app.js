let p=document.querySelector("p");

p.addEventListener("click", function(){
    console.log("This is paragraph");
})


let div=document.querySelector(".box");

div.addEventListener("mouseenter", function () {
    console.log("inside box");
  })