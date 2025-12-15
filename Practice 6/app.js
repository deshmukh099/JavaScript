let form=document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Registration Successful");
    console.log("Hello");
})