function savetoDB(data, success, failure){
    let intenetSpeed=Math.floor(Math.random()*10)+1;
    if(intenetSpeed>4){
        success();
    }
    else{
        failure();
    }
}

savetoDB("apna college", ()=>{
    console.log("Data is saved Successfully");
    savetoDB("Hello World", ()=>{
        console.log("Again Data is saved Successfully !!!!!!!!");
    }, ()=>{
        console.log("Data not submitted due to weak internet Connection :")
    })
    },
    ()=>{
        console.log("Weak Internet Connection");
})