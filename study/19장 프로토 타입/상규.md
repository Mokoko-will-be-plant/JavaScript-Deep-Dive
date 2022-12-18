# 프로토 타입(ProtoType)
```Javascript
const mokoko = {
    level: "beginner",
    name: 'SangGyu',
};

console.log(mokoko); // {level: "beginner", name: SangGyu}
```
### `mokoko`는 `level`과 `name`이라는 `속성`을 가진 `객체`이다.
### 속성은 객체가 가진 `특징`이나 `성질`을 말한다.
### 이처럼 `속성을 통해 여러 개의 값을 하나의 단위로 구성`한 복합적인 자료구조를 객체라 하며, 이 객체의 집합을 프로그램으로 표현하려고 하는것이 `객체지향 프로그래밍`이다.  
<br>
<br>


### `상속`은 `객체지향 프로그래밍의 핵심 개념`으로, `어떠한 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용`할 수있는 것을 말한다. 그리고 Javascript의 모든 객체는 `객체의 상위(부모)역할을 하는 프로토 타입 객체`라는게 존재한다.
<br>


```Javascript
function parents(firstName) {
    this.firstName = firstName
    this.name = function () {
        return `${this.firstName}koko`
    }
};

const child1 = new parents('Woo');
const child2 = new parents('Jang');
const child3 = new parents('Jeon');
const child4 = new parents('Jeong');
const child5 = new parents('Eun');

console.log(child1.name()); // Wookoko
console.log(child2.name()); // Jangkoko
console.log(child3.name()); // Jeonkoko
console.log(child4.name()); // Jeongkoko
console.log(child5.name()); // Eunkoko
```
### child들은 생성자 parents를 상속 받아 name 메서드를 사용할 수있게 되었다.
### 다만 위와 같이 작성하게 된다면 parents를 상속 받은 자식들은 모두 name을 중복 소유하게 된다
### 같은 내용의 메서드를 반복 사용한다면 `prototype`을 이용하는것이 바람직하다.
<br>

```Javascript
function parents(firstName) {
    this.firstName = firstName
};

parents.prototype.name = function() {
    return `${this.firstName}koko`
}

const child1 = new parents('woo');
const child2 = new parents('Jang');
const child3 = new parents('Jeon');
const child4 = new parents('Jeong');
const child5 = new parents('Eun');

console.log(child1.name()); // Wookoko
console.log(child2.name()); // Jangkoko
console.log(child3.name()); // Jeonkoko
console.log(child4.name()); // Jeongkoko
console.log(child5.name()); // Eunkoko
```

### parents가 바라보고 있는 `parents prototype 객체 속성`에 `name메서드를 추가`해주었다.
### 그리고 `child들은 parents를 상속` 받았다. 이렇게 되면 child들은 parents의 prototype이 바라보고 있는
### parents prototype 객체가 가진 name 메서드를 `공유받아 사용`할 수있게 되는 것이다.

<br>
<br>
<br>

### 프로토 타입에는 `__proto__` 라는 접근자 프로퍼티가 존재한다.
### `__proto__`를 이용하여 `prototype`에 값을 `할당`하거나 `호출`할 수 있다.
### 다만, 코드 레벨에서 직접 사용하는 것은 권장하지 않는다.
### 왜냐하면 모든 객체가 __proto__에 접근할 수 있는것은 아니기 때문이다.
<br>

```Javascript
const mokoko = name => {
    this.name = name;
}

console.log(mokoko.hasOwnProperty('prototype')); // false

console.log(mokoko.prototype); // undefined;

const obj = {
    foo() {}
};

console.log(obj.foo.hasOwnProperty('prototype')); // false
consoel.log(obj.foo.prototype); // undefined;
```
### `non-constructor`인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 `prototype을 갖지 않는다`.
### `constructor는 모든 프로토 타입이 가지고 있으며`,  prototype 프로퍼티로 `자신을 참조하고 있는 생성자 함수`를 가리킨다.
<br>

```Javascript
function mokoko() {}

const junior = new mokoko();

console.log(junior.constructor === mokoko); // true
```


> ## 객체는 다양한 생성 방법이 있고, 그에 따라 프로토타입이 결정된다.
<br>

### 1. 객체 리터럴(`Obejct.prototype`)
```Javascript
const obj = {x: 1};
```
<br>

### 2. Object 생성자 함수(`Obejct.prototype`)
```Javascript
const obj = new Object();
obj.x = 1;
```
<br>

### 3. 생성자 함수(`mokoko.prototype`)
```Javascript
function mokoko(name) {
    this.name = name;
}

const me = new mokoko('SangGyu');
```
<br>

### 4. Object.create 메서드(`Obejct.prototype`)
```Javascript
let obj = Object.create(Object.prototype);
```


> ## 프로토 타입의 체인
- 자바스크립트는 객체의 프로퍼티(메서드)에 접근하려고 할 때 해당 객체에 없다면 부모 역할을 하는 프로토타입 프로퍼티를 순차적으로 검색하며, 이를 프로토타입 체인이라고 한다.
- 오버라이딩은 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의하여 사용하는 방식이다
- 프로퍼티 섀도잉은 상속 관계에 의해 프로퍼티가 가려지는 현상을 말한다.

<br>

> ## 정적 프로퍼티 / 메서드
- 생성자 함수도 객체이기 때문에 자신의 프로퍼티/메서드를 소유할 수있다.
- 이때, 생성자 함수가 생성한 인스턴스로는 생성자 함수의 정적 프로퍼티 / 메서드를 호출할 수 없다.