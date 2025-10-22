// let count =1;
// let print = '';

// for(let i=0; i<6; i++){
//     count ++;
//     for (let j=1; j<count; j++){
//         print += j;
//     }
//     console.log(print);
//     print = '';
// }

//평균값 구하기, 30점 이상인 사람 key,value로 출력하기
let obj = { 
    호진: 10,
    민수: 90,
    영희: 20,
    철수: 80, 
    짱구: 30 
};
let sum = 0;
let avg = 0;
for(let key in obj){
    sum += obj[key];
    // console.log(sum);
    if(obj[key] >= 30){
        console.log(key, obj[key]);
    }
}
avg = sum / Object.keys(obj).length;
console.log(avg);

//최대값 구하기

let obj2 = { 호진: -10, 민수: -90, 영희: -20, 철수: -80, 짱구: -30 };
let max = 0;
let min = 0;
for (let key in obj2){
    if(obj2[key]> max){
        max = obj2[key];
    }
    if(obj2[key]< min){
        min = obj2[key];
    }
}
console.log("최댓값",max);
console.log("최솟값",min);
