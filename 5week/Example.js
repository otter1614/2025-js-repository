//주어진 문자열에서 같은 문자가 연숙ㅈ으로 반복되는 경우 해당 문재 개수를 붙어 압축된 문자열이 기존 문자열보다 길다면 원래 문자열을 반환하라
const ExNumOne = "aaabbbcccaaa";
function compressString(str) {
  let compressed = "";
  let count = 1;  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  return compressed.length < str.length ? compressed : str;
}
console.log(compressString(ExNumOne));


//숫자로 이루어 진 매열을 입력 받아 짝수만 필터링한 배열을 반환하는 함수를 작성하세여 이떄 filter() 메서드를 사용하세요
//입력 예시: [1,2,3,4,5,6]
//출력 예시: [2,4,6]
const ExNumTwo = [1,2,3,4,5,6];
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
//   return arr.find(num => num % 2 === 0);

}
console.log(filterEvenNumbers(ExNumTwo));

//문자열을 입력 받아 가장 긴 단어를 반환하는 함수를 작성하세요
//the quick brown fox jumped over the lazy dog
const ExNumThree = "the quick brown fox jumped over the lazy dog";
function findLongestWord(str) {
    const words = str.split(' ');

    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

//숫자로 이루어진배열을 입력 받아 배열 내 모든 요소의 합을 반환 하는 함수를 작성하라 reduce() 메서드를 사용하세요
//[1,2,3,4] => 
const ExNumFour = [1,2,3,4];
const sumArray = ExNumFour.reduce((acc,arr) => acc+arr,0);
console.log(sumArray);

// 문자열로 이루어진 배열을 입력 받아 모든 배열 요소를 하나으 ㅣ문자열로 연결하는 함수를 작성하라 join() 메서드를 사용하세요
//입력 예시 ["Hello","world","this","is","JavaScript"]
//출력 예시 "Hello world this is JavaScript"
const ExNumFive = ["Hello","world","this","is","JavaScript"];
const joinString = ExNumFive.join(' ');
console.log(joinString);

//여러개의 문자열이 주어 졌을 떄 그중 가장 긴 공통 접두사를 반환하는 함수를 작성하세요
//입력 예시 ["flower","flow","flight"]
//출력 예시 "fl"
const ExNumSix = ["flower","flow","flight"];

const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(ExNumSix));

//숫자로 이루어진 배열을 입력 받아 배열 내 모든 요소를 제곱한 값을 가지는 배열을 반환 하세요 map() 메서드를 사용하세요
//[1,2,3,4] 
//[1, 4, 9, 16]
const ExNumSeven = [1,2,3,4];
const sqArrau = ExNumSeven.map(num => num ** 2);
console.log(sqArrau);


// 주어진 배열에서 두숫자가 특정 값이 되는 쌍을 찾아 변환하는 함수를 작성하세요
const ExNumEight = [2,7,11,15];
const target = 9;

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [num[i], num[j]];
            }
        }
    }
    return [];
}

const result = twoSum(ExNumEight, target);
