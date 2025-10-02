//익명 함수
let function_test = function() {
    console.log('함수의 첫 번째 줄');
    console.log('함수의 두 번째 줄');

}
function_test();
console.log(function_test());

//선언 함수
function function_test2() {
    console.log('함수의 첫 번째 줄');
    console.log('함수의 두 번째 줄');
}
function_test2();
console.log(function_test2());

//화살표 함수
let function_test3 = () => {
    console.log('함수의 첫 번째 줄');
    console.log('함수의 두 번째 줄');
}
function_test3();
console.log(function_test3());

function calculate(x) {
    console.log((x * 10 /2%3).toString());
}
calculate(2);
calculate(5);

function multiply(x,y) {
    return x * y;
}
const result = multiply(2,4);
console.log(result);

const result2 = multiply(5,4);
console.log(result);

function multiply(min,max) {
    let output = 1;
    for(let i = min; i <= max; i++){
        output = output * i;
    }
    return output;        
}
console.log(multiply(1,4));


//화살표 함수 기본에세 간략화 하기
//기본
const function_test4 = (x) => {
    return x * 2;
}
console.log(function_test4(4));
//한 줄일 때 중괄호와 return 생략 가능
const function_test5 = (x) => x * 2;
console.log(function_test5(4));
//매개변수가 하나일 때 괄호 생략 가능
const function_test6 = x => x * 2;
console.log(function_test6(4));
//화살함수에서 매개변수를 3개로 둘때
const function_test7 = (x,y,z) => `x: ${x}  y: ${y}  z: ${z}`;
console.log(function_test7(4,5,6));

//위의 함수를 풀어서 해보면
function function_test8(x) {
    return function(y) {
        return function(z) {
            return `x: ${x}  y: ${y}  z: ${z}`
        }
    }
}
// 커링(curring) 함수이므로 아래와 같이 연속적으로 호출해야 합니다.
console.log(function_test8(4)(5)(6));


//arrow 함수를 일반 함수 형태로 표현할 수 있ㄷ
const multiply2 = (x,y) => {
    return x * y;
}
console.log(multiply2(3,4));

//함수안에 keyworld인 arguments를 했을 떄 출력이 각 index값을 주는 것으로 보인다
const multiply3 = function(x,y,z) {
    console.log(arguments);
    return x * y * z;
}
console.log('-------------------');
console.log(multiply3(3,4,5));

//prameter를 무한정 받으 경우 -> 향휴 Object 에서 자세히 다룸
const multiplyAll = function (...args) {
    return Object.values(arguments).reduce((acc,cur) => acc * cur,1);
}
console.log(multiplyAll(1,2,3,4,5));

// 함수의 이름이 없고 즉시 실행하는 함수 형태 함수를 ()안에 function(x,y)를 감싸고 (4,5)로 즉시 실행
(function(x,y) {
    console.log(x * y);
})(4,5);

//함수이름 instanceof Function
console.log(typeof multiply);
console.log(multiply instanceof Object);

let iveMenmber = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMenmber);

//concat 함수 - push 함수 비슷
console.log(iveMenmber.concat('연암공대'));
console.log(iveMenmber);
console.log('-------------------');
//slice 함수 - splice 함수와 비슷
console.log(iveMenmber.slice(0,3));
console.log(iveMenmber);
console.log('-------------------');

//spread operator
let iveMenmber2 = [
    ...iveMenmber,
];
console.log(iveMenmber2);

let iveMenmber3 = [
    iveMenmber,
];
console.log(iveMenmber2);

let iveMenmber4 = iveMenmber;
console.log(iveMenmber4);
console.log(iveMenmber4 === iveMenmber);

//spread operator
// console.log([
//     ...iveMenmber,
// ] === iveMenmber);
// console.log('-----------');
