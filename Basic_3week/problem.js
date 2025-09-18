// 문제 1 : 변수 myName과 age를 만들고, 자신의 이름과 나이를 저장해봅시다.
let myName = "박경민" 
let age = 23;
let newAge = age + 1;
console.log(`안녕하세요 제이름은 ${myName}이고 ${age}살입니다. 내년에는 ${newAge}살이 됩니다.`)

// 문제 2 : 키와몸무게 정보로 BMI 계산하기
let height = 180;
let weight = 70;
let bmi = weight / ((height/100) * (height/100));
let bmiRounded = bmi.toFixed(2);
console.log(`키 ${height}cm, 몸무게 ${weight}kg인 사람의 BMI는 ${bmiRounded}입니다.`);

// 문제 3 : 할인된 상품가격 계산하기
let originalPrice = 10000;
let discountRate = 0.2;
let discountedPrice = originalPrice * (1 - discountRate);
console.log(`원래 가격이 ${originalPrice}원이고, ${discountRate*100}% 할인된 상품의 가격은 ${discountedPrice}원입니다.`)