function CallTwice(func){
  func();
  func();
}

function CallTenTimes(f){
  for (i=0; i<10; i++){
    f();
  }
}


function RollDice(){
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

/* RollDice(); */
/* CallTwice(RollDice); */
/* CallTenTimes(RollDice); */

function isBetween (min, max){
  return function(num){
    return num>= min && num<=max;
  }
}