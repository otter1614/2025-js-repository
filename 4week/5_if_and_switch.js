let num = 5;


if(num %2 === 0) {
    console.log('num 변수는 짝수 입니다');
}else{
    console.log('num 변수는 홀수 입니다');
}


if(num %2 ===0){
    console.log('2의 배수입니다');
}else if (num %3 ===0){
    console.log('3의 배수입니다');
}else if (num %3 ===0){
    console.log('4의 배수입니다');
}else if (num %3 ===0){
    console.log('5의 배수입니다');
}else{
    console.log('2,3,4,5의 배수가 아닙니다');
}

const englishDay = 'fryday';

let koreanDay;

switch(englishDay){
    case 'monday' :
        koreanDay = '월요일';
        break;
    case 'tuesday' :
        koreanDay = '화요일';
        break;
    case 'wednesday' :
        koreanDay = '수요일';
        break;
    case 'thirsday' :
        koreanDay = '목요일';
        break;
    case 'fryday' :
        koreanDay = '금요일';
        break;
    default :
        koreanDay = '주말';
        break;
}
console.log(koreanDay);

//원본 가석성 낮음
let test;
console.log(typeof(test));

test = typof(test) != 'undefined' ? test : '초기화1';
console.log(typeof(test));
console.log(test);

test = typof(test) != 'undefined' ? test : '초기화2';
console.log(typeof(test));
console.log(test);

//변형문 가속성 높음
let test2;
console.log(test2)
if(typeof(test)=='undefined'){
    test2 =='초기화1';
}
console.log(test);

if(typeof(test)=='undefined'){
    test2 =='초기화2';
}
console.log(test);
