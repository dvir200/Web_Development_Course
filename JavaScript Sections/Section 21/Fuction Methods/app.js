const MyMath = {
  PI: 3.14159,
  square : function(num){
    return num * num; 
  },
  cube (num){
    return num **3;
  }
}

const cat = {
  name : 'Blue Steele',
  color : 'grey',
  breed: 'scottish fold',
  meow(){
    console.log("THIS IS", this);
    console.log(`${this.name} says meoww`);
  }
}

/* const hen = {
  name : 'Helen',
  eggCount : 0,
  layAnEgg (){
    this.eggCount = this.eggCount +1;
      this.eggCount++;
      return console.log("EGG");
  }
} */