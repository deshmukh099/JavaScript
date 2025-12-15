function poem(){
    console.log("Pranav");
    console.log("Deshmukh");
}

function rollDice(){
    let num=Math.floor(Math.random()*6)+1;
    console.log(num);
}

function printInfo(name,age){
    console.log(`${name} age is : ${age}`);
}

function calcAvg(a,b,c){
    avg=(a+b+c)/3;
    console.log(avg)
}

function multTable(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}

function nCalculate(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

// let sum=nCalculate(5);
// console.log(sum);

let str=["Hi","Hello","Bye","!!!","$$$","%%%","***"];

function concatination(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

let result=concatination(str);
console.log(result);


let brr=[2,6,8,7,9,1,3,4,6,5,8,7,4];

let ans=brr.every((el)=>el%10==0);

console.log(ans);

let min=brr.reduce((res,el)=>{
    if(res<el){
        return res;
    }
    else{
        return el;
    }
});

console.log(min);
