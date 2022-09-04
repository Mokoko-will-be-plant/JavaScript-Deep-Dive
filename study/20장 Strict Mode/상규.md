# Strict Mode

> ## 암묵적 전역
```Javascript
function mokoko () {
    mokokoFamily = '일취월장하며 성장중~';
}

mokoko();

console.log(mokokoFamily); // 일취월장하며 성장중~;
```

### mokokoFamily를 따로 선언한 적이 없어 RefernceError를 발생시킬 것 같지만 자바스크립트 엔진은 암묵적으로 전역 객체에 mokokoFamily를 동적 생성한다. 이때 생성한 mokokoFamily는 마치 전역 변수처럼 사용이 가능하다.

__`암묵적 전역은 오류를 발생시키는 원인이 될 가능성 크다. 꼭 var, let, const를 사용하여 변수를 선언하여 사용하자`__

> ## Strict Mode 사용하기
<br>

### 1. 전역에 사용하기
```Javascript
'use strict';

function mokoko () {
    mokokoFamily = '일취월장하며 성장중~'; // RefernceError: mokokoFamily is not defined
}

mokoko();
```
<br>

### 2. 함수 내에 사용하기(해당 함수 및 중첩 함수에 적용)
```Javascript
function mokoko () {
    'use strict';
    mokokoFamily = '일취월장하며 성장중~'; // RefernceError: mokokoFamily is not defined
}

mokoko();
```
<br>

### 3. 즉시 실행 함수 내에서 사용하기 - Good!
```Javascript
(function() {
    'use strict';
    
    function mokoko () {
        'use strict';
        mokokoFamily = '일취월장하며 성장중~'; // RefernceError: mokokoFamily is not defined
    }

    mokoko();

    console.log(mokokoFamily);
}());
```

__`strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는것이 바람직하다`__


> ## strict mode 로 인한 변화
 ```Javascript
 (function () {
    'use strict';

    function basicMokoko () {
        console.log(this); // undefined
    }

    basicMokoko();

    function ExpertMokoko() {
        console.log(this); // ExpertMokoko {}
    }

    new ExpertMokoko();
 }());
 ```
 <br>

 ### strict mode 에서 일반함수로 호출 시 this에 undefind가 바인딩 된다.

```javascript
(function(mokokoFamily){
    'use strict';

    // arguments를 재할당
    mokokoFamily = 'basicMokoko';

    // arguments가 변경되지 않았다.
    console.log(arguments); // {0: ExpertMokoko}
}('ExpertMokoko'));
```
### arguments를 재할당 하여도 기존 arguments는 변하지 않는다.