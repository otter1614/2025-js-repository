//주어진 배열에서 숫자 두 개를 더해서 100이 되는 모든 쌍을 출력 하세요
    //출력 예시 : [20, 80], [30, 70], [50, 50]

let array1 = [20, 30, 50, 70, 80, 10, 90];
let answer1 = {};

for (let i = 0; i < array1.length; i++) {
    for (let k = i + 1; k < array1.length; k++) {
        if (array1[i] + array1[k] === 100) {
            answer1[`${i}-${k}`] = [array1[i], array1[k]];
        }
    }
}

console.log(answer1);


//배열에서 최대값 구하는 프로그램을 작성 하세요
let arr = [10, 45, 22, 98, 67];
let answer2 = arr[0];
for(i=0; i<6; i++){
    if(answer2<arr[i]){
        answer2 = arr[i]
}
}
console.log(answer2);

//숫자 배열 평균 구하는 프로그램을 작성 하세요
let number = [10, 20, 30, 40, 50];
sum=0;
avg=sum / number.length;
for(i=0; i<5; i++){
    sum += number[i];
}
console.log(avg);

//주어진 문자열 “hello world”을 특정 문자 개수 세기를 작성하는 프로그램을 작성 하세요 특정 문자는 “l” 입니다.
// 문자열을 슬라이스 해서 
let str = "hello world";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'l') {
        count += 1;
    }
}
console.log(count)

console.log("문자 'l'의 개수:", count);

//다음 출력을 생성 하는 코드를 반복문으로 작성 하세요 *로 피라미드 만들기
let count2 = 1;

for (let i = 0; i < 7; i++) {
    let space = '';
    let star = '';
    for (let j = 0; j < 6 - i; j++) {
        space += ' ';
    }
    for (let k = 0; k < count2; k++) {
        star += '*';
    }
    console.log(space + star);
    count2 += 2;
}