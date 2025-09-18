const constant = "변경불가능";
// constant = ""; // 상수는 재할당 불가, 이 줄은 주석 처리 또는 삭제
console.log(constant);

//문자열
typeof('string');
//숫자
typeof(1234)
//불리언
typeof(true)
typeof(false)
//undefined
typeof(function(){})
//null
typeof(object)

let alpha;
typeof(alpha)

//number
let num = 1234;
let num2 = -10;
let pi = 3.14;
console.log(typeof(num));
console.log(typeof(num2));
console.log(typeof(pi));
console.log("-----------------------");

let inf = Infinity;
let ninf = -Infinity;
console.log(typeof(inf));
console.log(typeof(ninf));
console.log("-----------------------"); 


// String

const collegeName = "연암공대"
console.log(collegeName);
console.log(typeof(collegeName));
const ive = "'아이브' 안유진"
console.log(ive);

//template literal
const iveYujin = "아이브 \n 안유진"
console.log(iveYujin);
const iveWonYoung = "아이브 \t 장원영"
console.log(iveWonYoung);
const backslash = "아이브 \\ 연암공대"
console.log(backslash);
const iveWonYoung2 = `아이브 \\\\\\\\\\\ 장원영`
console.log(iveWonYoung2);
console.log(typeof(iveWonYoung2));

const groupName = "아이브"
console.log(groupName + "안유진");
console.log(`${groupName} 안유진`);
console.log(`-----------------------`);

//boolean
let isTrue = true;
let isFalse = false;
console.log(typeof(isTrue));
console.log(typeof(isFalse));
console.log("-----------------------");

let hours = (new Date()).getHours();
console.log(hours);
console.log(hours<3||8<hours);
console.log("-----------------------");
//undefined
let noInit
console.log(noInit);
console.log(typeof(noInit));
console.log("-----------------------");
//null
let empty = null;
console.log(empty);
console.log(typeof(empty));
console.log("-----------------------");
//symbol
const sym1 = "1";
const sym2 = "1";
console.log(sym1===sym2);
const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1===symbol2);
console.log("-----------------------");

//object
const obj = {
    name : "박경민",
    age : 23,
    class : "first",
    school : "연암공대"
}
console.log(obj);
console.log(obj['name']);
console.log(obj['age']);
console.log(obj['class']);
console.log(obj['school']);
console.log(typeof(obj));
console.log("-----------------------");

//Array
const iveMembers = [
    "안유진",
    "장원영",
    "가을",
    "레이",
    "리즈",
    "이서"
];
console.log(iveMembers);
console.log(iveMembers[0]);
console.log(iveMembers[5]);

iveMembers[5] = "이서현"
console.log(iveMembers);
console.log(typeof(iveMembers));
console.log("-----------------------");

