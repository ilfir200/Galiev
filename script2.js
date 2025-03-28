let a = prompt("Введите первое число");
let b = prompt("Введите второе число");

function Numbers(a,b){
    let MaxNumber = Math.max(a,b);
    let MinNumber = Math.min(a,b);
    for (i = MinNumber; i <= MaxNumber; i++)
        {
        if(i%2 == 0){
            console.log(i);
        }
    }
}

Numbers(a,b);

function Min(a,b){
    console.log(Math.min(a,b));
}

Min(a,b);

const janr = ["Джаз","Блюз"];
janr.push = "Рок-н-ролл";
let ceredina;
if(janr.length % 2 == 0){
    ceredina= janr.length % 2 + 1
}
else{
    ceredina = janr.length % 2
}
janr[ceredina] = "Классика";

console.log(janr.shift());

janr.unshift("Рэп","Регги")
console.log(janr);

