function savetoDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Success : Data saved successfully");
        }
        else{
            reject("Failure : Data not saved");
        }
    })
}

let request=savetoDB("Apna College");
request.then((result)=>{
    console.log("Promise was resolved 1");
    console.log(request);
    console.log(result);
    return savetoDB("Hello World!!")
})
.then((result)=>{
    console.log("Promise was resolved 2");
    console.log(request);
    console.log(result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log(request);
    console.log(error);
})
