let input=document.querySelector('input');

input.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log("Key was pressed")
})