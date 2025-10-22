// 단단한 학생 객체 생성 및 메서드 추가
const student = {
    name : "박경민",
    age : 23 ,
    birthday  : function()  {
        age ++;
        console.log(`${student.name}님의 생일이 지났습니다 현재나이 ${student.age} 입니다`)
    }
};
console.log(birthday());

//책 객체 생성 및 가격 계산 메서드 추가
const Book = {
    book_name: '안내의 일기',
    book_original_price: 10000,
    Tax: 0.1,
    finalPrice: 0,
    getFinalPrice: function() {
        this.finalPrice = this.book_original_price * (1 + this.Tax);
        return this.finalPrice;
    }
};
console.log(Book.getFinalPrice());

//3. 은행계좌 객체와 입출금 메서드 추가
const account = {
    deposit : 0 ,
    withdraw : 0,
    bank : function(dep , wid) {
        console.log(`현재 입력 금액 ${dep}입니다, 출력 금액은 ${wid}입니다. `)
        withdraw = dep - wid;
        if(withdraw > 0){
            console.log(`출금이 완료 되었습니다, ${withdraw}원 출금입니다`)
        }else{
            console.log(`잔고가 모자랍니다, 현재 잔고 ${dep}입니다`)
        }
    }
    }
    // not_enough_money : function()  {
    //     this.withdraw = this.deposit - this.request_withdraw;
    //     if(this.withdraw > 0){
    //         console.log(`출금이 완료 되었습니다, ${this.withdraw}원 출금입니다`)
    //         return this.withdraw;
    //     }else{
    //         return console.log(`잔고가 모자랍니다, 현재 잔고 ${this.deposit}입니다`)
    //     }
    // }

console.log(account.bank(100,200));

//4. 영화 객체 평점 메서드 추가
const movie = {
    points: [4.5, 4.3, 3.5, 5.0],
    get_average: function() {
        const sum = this.points.reduce((acc, cur) => acc + cur, 0);
        return sum / this.points.length;
    }
};
console.log(movie.get_average());

//5.수강생 객체와 수강 과목 리스트 메서드 추가
new_subject = "사회"
const student2 = {
    subject : ['수학' , '국어' , '영어' , '과학'],
    add_subject : function(new_subject) {
        this.subject.push(new_subject);
        return this.subject;
    }
}
console.log(student2.add_subject(new_subject));

//6. 도서 관리 시스템
const newBook = ['경민이 자서전', '아이브 사진첩', '빅뱅이론', '연암공대 어디까지 가나'];
const borrowBook1 = '아이브 사진첩';
const borrowBook2 = '아이브 엘범';

const Library = {
    Book: [],
    Borrowed: [],
    add_book: function() {
        this.Book.push(...newBook);
    },
    find_book: function(bookName) {
        return this.Book.includes(bookName);
    },
    is_borrowed: function(bookName) {
        return this.Borrowed.includes(bookName);
    },
    borrow_book: function(bookName) {
        if (this.is_borrowed(bookName)) {
            console.log(`${bookName}은(는) 이미 대여중입니다.`);
        } else if (this.find_book(bookName)) {
            this.Book = this.Book.filter(b => b !== bookName);
            this.Borrowed.push(bookName);
            console.log(`${bookName}을(를) 대출했습니다. (대여중)`);
        } else {
            console.log(`${bookName}은(는) 도서관에 없습니다.`);
        }
    }
};

Library.add_book();
Library.borrow_book(borrowBook1); // '아이브 사진첩' 대출
Library.borrow_book(borrowBook2); // '아이브 엘범' 없음
Library.borrow_book(borrowBook1); // 이미 대여중
//7. 학생 성적 관리
const student3 = {
    name : '박경민',
    score : [100,100,90],
    get_average : function(){
        let sum = 0;
        for(let i = 0; i < this.score.length; i++){
            sum += this.score[i];
        }
        return sum / this.score.length;
    },
    get_grade : function(){
        const avg = this.get_average();
        if(avg === 100){
            console.log('S');
        }else if(avg >= 90){
            console.log('A');
        }else if(avg >= 80){
            console.log('B');
        }else if(avg >= 70){
            console.log('C');
        }else if(avg >= 60){
            console.log('D');
        }else {
            console.log("F");
        }
    }
}
student3.get_grade();