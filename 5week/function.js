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