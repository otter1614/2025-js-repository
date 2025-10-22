// 객체 : 프로포티(키와 밸류) + 메서드(함수)로 
let array = ['사과', '바나나' , '망고' , '딸기'];

let product = {
    제품명 : '7D 건조망고',
    유형 : '당절임',
    성분 : '망고 , 설탕 , 메타중아 황상화나트룸 , 치자황색소',
    원산지 : ' 필리핀'
};

console.log(product);

// //product 접근방법
// console.log(product.제품명)
// console.log(product.유형)
// console.log(product.성분)
// console.log(product.원산지)

// console.log(product['제품명']);
// console.log(product['유형']);
// console.log(product['성분']);
// console.log(product['원산지']);

let yujin = {
    name : '안유진',
    group : "IVE",
    dance : function() {
        // return '안유진이 춤을 춥니다';
        return `${this.name}이 춤을 춥니다`
    }
};

const key = 'name';
console.log(yujin[key])

const nameKey = 'name';;
const nameValue = '안유진';

const groupKey = 'grou';;
const grouValue = 'IVE';


const yujin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function() {
        return `${this.name}이 춤을 춥니다`
    }
}
console.log(yujin2)
console.log(yujin2.dance())


let original = '안녕하세요';
let clone = original;
console.log(original);
console.log(clone)

clone += ' 안유진 입니다';
console.log('----------------------------')
console.log(original);
console.log(clone)

let originaObj = {
    name : '안유진',
    group : 'IVE',

};
let cloneObj = originaObj;

console.log(originaObj);
console.log(cloneObj);
originaObj['group'] = '연암공대';

console.log('----------------------------')
console.log(originaObj);
console.log(cloneObj);

console.log(originaObj === cloneObj);
console.log(original === clone);

originaObj = {
    name : '변유찬',
    group : '연암공대', 
};

cloneObj = {
    name : '변유찬',
    group : '연암공대'
};
console.log(originaObj === cloneObj);

const yujin1 = {
    name : '안유진',
    group : '아이브'
};

const yujin4 = yujin1;
const yujin3 = {
    name : '안유진',
    group : '아이브',
};
console.log(yujin1 === yujin4);
console.log(yujin1 === yujin3);
console.log(yujin3 === yujin4);

