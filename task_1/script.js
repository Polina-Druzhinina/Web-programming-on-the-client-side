'use strict';
//Задача 1.2
function isPrime(n) {
  if (n < 2) return false;     
  if (n == 2) return true;     
  if (n % 2 == 0) return false; 

  for (let i = 3; i <= Math.sqrt(n); i += 1) {
    if (n % i == 0) return false;
  }
  return true;
}

function solve1() {
  let n = Number(document.getElementById('input1').value);
  let res = isPrime(n);
  console.log(res);
  document.getElementById('result1').textContent = res;
}

//Задача 1.4
function solve2(){
    let n = Number(document.getElementById('input2').value);
    let primes = [];
    let num = 2;

    while(primes.length < n){
        if(isPrime(num)){
            primes.push(num);
        }
        num ++;
    }
    console.log('Первые', n, 'простых чисел', primes);
    document.getElementById('result2').textContent = primes.join(', ');
}

function dels(n){
    let delitely = [];
    for(let x = 1; x <= Math.sqrt(n); x++){
        if(n % x == 0){
            delitely.push(x)
            if (x !== 1 && x !== n / x) {
                delitely.push(n / x);
            }
        }
    }
    return delitely;
}

//Задача 1.7
function solve3(){
    let n = Number(document.getElementById('input3').value);
    let sov_num = [];
    let num = 2;
    while (sov_num.length < n){
        let sp = dels(num);
        let sum = sp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if(sum == num){
            sov_num.push(num);
        }
        num ++;
    }
    console.log('Совершенные числа', sov_num);
    document.getElementById('result3').textContent = sov_num.join(', ');
}


//Задача 1.12
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function reduceFraction(num, den) {
    if (den === 0) {
        console.log('Ошибка: деление на ноль!');
        document.getElementById('result4').textContent = 'Ошибка: знаменатель = 0';
        return null;
    }
    if (den < 0) {
        num = -num;
        den = -den;
    }
    let common = gcd(Math.abs(num), den);
    return {
        numerator: num / common,
        denominator: den / common
    };
}

function solve4(){
    let a = Number(document.getElementById('input4_1').value);
    let b = Number(document.getElementById('input4_2').value);
    let c = Number(document.getElementById('input4_3').value);
    let d = Number(document.getElementById('input4_4').value);
    let op = document.getElementById('input4_5').value.trim();
    
    if (b === 0 || d === 0) {
        console.log('Ошибка: знаменатель не может быть равен нулю!');
        document.getElementById('result4').textContent = 'Ошибка: знаменатель = 0';
        return;
    }
    
    let resNum, resDen;
    if (op === '*') {
        resNum = a * c;
        resDen = b * d;
    } else if (op === '/') {
        if (c === 0) {
            console.log('Ошибка: деление на ноль (вторая дробь равна 0)!');
            document.getElementById('result4').textContent = 'Ошибка: деление на 0';
            return;
        }
        resNum = a * d;
        resDen = b * c;
    } else {
        console.log('Ошибка: введите знак * или /');
        document.getElementById('result4').textContent = 'Ошибка: введите * или /';
        return;
    }
    
    let result = reduceFraction(resNum, resDen);
    if (result) {
        let output =  `${result.numerator}/${result.denominator}`;
        console.log('Результат:', output);
        document.getElementById('result4').textContent = output;
    }
}

//Задача 1.15
function solve5(){
    let n = Number(document.getElementById('input5_1').value);
    let m = Number(document.getElementById('input5_2').value);
    let res = [];

    for(let i = n; i <= m; i++){
        let summ = 0;
        let c = Math.abs(i);
        while(c > 0){
            summ += (c % 10);
            c = Math.trunc(c / 10); 
        }
        if (summ !== 0 && i % summ == 0){
            res.push(i);
        }
    }
    console.log('Числа:', res);
    document.getElementById('result5').textContent = res.length > 0 ? res.join(', ') : 'Нет таких чисел';
}