let jsonRes='{"fact":"The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.","length":93}';

console.log(jsonRes);

let validjson=JSON.parse(jsonRes);
console.log(validjson);
console.log(validjson.fact);
console.log(validjson.length);


let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })


async function getFact(){
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);
}

getFact();