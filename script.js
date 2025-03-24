let a = prompt("Введите стоимость товара");
let b = prompt("Введите количество денег клиента");
if (typeof(Number(a)) === 'number' && typeof(Number(b)) === 'number' && a > 0 && b > 0 )
{
    if(a == b){
        console.log("Покупка совершена")
    }else if (a > b){
        console.log(`Для покупки не хватает ${a-b} р.`)
    }
    else{
        console.log(`Покупка совершена. Сдача ${b-a} р.`)
    }
}
else{
    console.log("Неверный формат")
}

let n = prompt("Введите число")
if (n > 0){
    alert("1")
}
else if (n < 0){
    alert("-1")
}
else{
    alert("0")
}


let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

x = (a + b < 4) ? "Мало" : "Много"