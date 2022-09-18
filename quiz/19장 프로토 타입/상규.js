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
 * Quiz. 아래 6가지 함수를 각각 실행했을때 나올 올바른 결과는?
 * 1. mokoko.resolveQuiz(); - mokoko.resolveQuiz is not a function
 * 2. mokokoFamily.resolveQuiz(); // Hello my name is SangGyu
 * 
 * 3. console.log(mokoko.rice); //goodCode
 * 4. console.log(mokokoFamily.rice); // undefined
 * 
 * 5. mokoko.growRoutine(); // eat, sleep and coding
 * 6. mokokoFamily.growRoutine(); // mokokoFamily.growRoutine is not a function
 */