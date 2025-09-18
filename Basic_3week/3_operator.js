
console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);
console.log(10%3);

console.log("-----------------------");
console.log(10*(10+10));

let number = 1;
number ++;
console.log(number);
number --;
console.log(number);

//연산자가 변수 앞에 있는거는 코딩에서 많이 사용하지 않음헷갈리니까
result = ++number;
console.log(result , number);

result = -- number;
console.log(result , number);

//Number Type 36page
let sample = "99"
console.log(+sample); //문자열 + 숫자 = 문자열
console.log(typeof(+sample));
console.log(sample);
console.log(typeof(sample));
sample = true;
console.log(+sample);
console.log(typeof(+sample));
sample = false;
console.log(+sample);
console.log(typeof(+sample));

sample = "안유진"
console.log(+sample);

sample = "99"
console.log(-sample);
console.log(typeof(-sample));

//num
number = 100;
console.log(number);

number += 10;
console.log(number);

number *= 10;
console.log(number);
number /= 10;
console.log(number);
number %= 10;
console.log(number);
console.log("-----------------------");

//비교 연산자
console.log("-----------------------");
console.log(5 === 5);
console.log(5 === "5");
console.log(0 === '');
console.log(true == 1);
console.log(false == 0);
console.log(true == 1);
console.log("-----------------------");
console.log(5 !== 5);
console.log(5 !== "5");
console.log(0 !== '');
console.log(true != 1);
console.log(false != 0);
console.log(true != 1);
console.log("-----------------------");

//대소관계 비교 연산자
console.log(100 > 1);
console.log(100 >= 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log("-----------------------");

//삼항조건 연산자
console.log("-----------------------");
let ternary = 10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다";

//논리연산자
console.log("-----------------------");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("-----------------------");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("-----------------------");
console.log(10>2&&20>2);
console.log(10<2&&20>2);
console.log(10<2&&20<2);
console.log("-----------------------");
console.log(10>2||20>2);
console.log(10<2||20>2);
console.log(10<2||20<2);

console.log('------------------');

console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

// 지수 연산자
console.log(2 ** 2);
console.log(10 ** 3);

//null 연산자
console.log('------------------');

let myName
console.log(myName);
// myName이 null 일때 연암공대가 할당
myName = myName ?? '연암공대'
console.log(myName);

// 위에서 myName에 연암공대가 있기에 myName은 연암공대임
myName = myName ?? '아이브'
console.log(myName);

let name2;
name2 ??= '연암공대'
console.log(name2);