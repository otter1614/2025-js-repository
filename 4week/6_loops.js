let array = [52, 273 , '아침밥' , '점심밥' , true , false];
console.log(array);

array[0]=0;
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);


//for 반복문
for(let i=0; i<10; i++){
    console.log(i);
}
for(let i=10; i<0; i--){
    console.log(i);
}

console.log('-------------------');
let output = 1;
for(let i=1;i<=20; i++){
    output*=i;
}
console.log(output);

console.log('-------------------');
//배열의 크기만큼 반복하기
let Array = [1,2,3,4,5,6];
//요소의 길이를 출력
for(let i = Array.length -1; i>=0; i--){
    console.log(Array[i]);
}


//Object
const yujin ={
    name  : '안유진',
    year : 2003,
    group : '아이브'
}
for(let key in jujin){
    console.log(key);
}

console.log('-------------------');

const iveMembersArray = ['안유진' , '가을','레이','장원영','리즈','이서'];
for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
    
}

for(let key of iveMembersArray){
    console.log(key);
}

//중첩 반복문
for(let i=0; i<3;i++){
    for(let j=3;j>0;j--){
        console.log(i,j);
    }
}

//정사각형 출력
let square = '';
let side = 6;
for(let i=0; 9<side; i++){
    for(let j=0; j< side;j++){
        square +='*';
    }
    square += '\n';
}
console.log(square);
console.log('-------------------------');

//while 문
let num = 0;
while (num <10){
    num ++;
}
console.log(num);

//do while 문
do{
    num++;
}while(num <10);
console.log(num);

//while(true)
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

console.log('----------------------');

number = 0;
while(number < 10) {
    if(number === 5) {
        break;
    }
    number++;
    console.log(number);
}

// skip
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

console.log('------------------');

let number = 0;
while(number < 10) {
    number++;
    if(number === 5) {
        continue;
    }
    console.log(number);
}

//타입 변환
let age = 23;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge)

let test = age +'';
console.log(typeof test, test);
console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

console.log('------------------');

//명시적 변한 배우기
console.log(type (99).toString(),(99).toString());
console.log(type (true).toString(),(true).toString());
console.log(type (Infinity).toString(),(Infinity).toString());

//숫자 타입으로 변환
console.log(typeof parseInt('0'),parseInt('0'));
console.log(typeof parseFloat('0.99'),parseFloat('0.99'));
console.log(typeof +'1' + '1');

//논리 타입 변환
console.log('----------------------');
console.log(!! 'xsadfsa');
console.log(!! '');

console.log(!! 0);
console.log(!! '0');
console.log(!! 'false');
console.log(!! false);
console.log(!! undefined);
console.log(!! null);

console.log(!! {});
console.log(!! []);
