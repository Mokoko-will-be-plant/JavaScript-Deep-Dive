function mokoko (name) {
    this.name = name;
}

mokoko.prototype.resolveQuiz = function() {
    console.log(`Hello my name is ${this.name}`);
};

mokoko.rice = 'goodCode';

mokoko.growRoutine = function () {
    console.log('eat, sleep and coding');
};

const mokokoFamily = new mokoko('SangGyu');

/**
 * Quiz. 아래 3가지 함수를 각각 실행했을때 나올 올바른 결과는?
 * 1. mokoko.resolveQuiz();
 * 2. mokokoFamily.resolveQuiz();
 * 
 * 3. console.log(mokoko.rice);
 * 4. console.log(mokokoFamily.rice);
 * 
 * 5. mokoko.growRoutine();
 * 6. mokokoFamily.growRoutine();
 */