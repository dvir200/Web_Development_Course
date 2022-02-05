let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* const even = nums.filter((n) =>{
  return n %2 ===0
}) */

/* const even = nums.filter((n) =>(
  n %2 ===0
)) */

const even = nums.filter((n) =>n %2 ===0)

/* nums.forEach(function(el){
  console.log(el);
}) */

const drivers = [
  {
    Name: "Sebastian Vettel",
    Team: "Aston Martin"
  },

  {
    Name: "Lewis Hamilton",
    Team: "Mercedes F1"
  },

  {
    Name: "Max Verstappen",
    Team: "Red Bull Honda"
  },

  {
    Name: "Charles Leclerc",
    Team: "Scudaria Ferrari"
  }
]

/* drivers.forEach(function(driver){
  console.log(`${driver.Name} - ${driver.Team}`);
}) */

const names = drivers.map(function(driver){
  return driver.Name;
})

const multiply = (num) =>{
  return num * 2;
}

const greet = (name) =>{
  console.log("Hey " + name + "!")
}