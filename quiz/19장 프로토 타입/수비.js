const dinner = (function () {

  function dinner(food) {
    this.food = food;
  }

  dinner.prototype.sayDelicious = function() {
    console.log(`${this.food} is very Delicious !`);  - (1)
  };

return dinner;
}());

const curry = new dinner('Curry');

curry.sayDelicious = function() {
    console.log(`${this.food} is very Delicious !`); - (2)
}


/*
1. (1), (2)번 중 어떤 메서드가 호출되는가?
curry.sayDelicious(); 

2. (1), (2)번 중 어떤 메서드가 호출되는가?
delete curry.sayDelicious; 
curry.sayDelicious();    


3. 한번더 아래의 코드를 실행했을때, (1), (2)번 중 어떤 메서드가 호출되는가?, 그리고 그 이유는?
delete curry.sayDelicious; 
curry.sayDelicious();   
*/
