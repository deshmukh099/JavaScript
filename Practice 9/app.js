let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let btnDel=document.createElement("button");
    btnDel.innerText="Delete";
    btnDel.classList.add("Delete");

    item.appendChild(btnDel);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
})