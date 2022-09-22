const obj = {
  outer: function () {
    console.log(this); //  Q1
    var inner = function () {
      console.log(this); //  Q2
    };
    inner();
  },
};
obj.outer();

// Q1 ??

// Q2 ??
