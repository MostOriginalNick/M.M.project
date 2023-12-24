// 1 Створіть об'єкт room з параметри:
// ключ height зі значенням 3
// ключ tv зі значенням samsung
// ключ big зі значенням true

let room = {
    height: 3,
    tv: 'samsung',
    big: true
}
// 2 Виведіть в alert тип даних параметра big

alert(typeof room.big);

// 3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.

let user = {
  name: "John",
  age: 30
};

if(user && user.hasOwnProperty("age")){
    console.log('true')
}

// 4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.

let users = {
  user_1: {
    name: "John",
    age: 30
  },
  user_2: {
    name: "Bob",
    age: 21
  },
  user_3: {
    name: "Anna",
    age: 19
  }
}

let bobObj = null;

for (let key in users) {
    if (users[key].name === "Bob"){
        bobObj = users[key];
    }
}

console.log(bobObj);

// 5 Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna"

for (let key in users) {
    if (users[key].name === "Anna"){
        delete users[key];
    }
}

console.log (users);

// 6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії)

let car = {
    brand: 'Tesla',
    model: 'X',
    releaseDate: 2020,
    averageSpeed: 120,
    gasVolume: 400,
    gasConsumption: 12,
    drivers: []
}

// Метод, який виводить на екран інформацію про автомобіль.

function carInfo (obj){
   alert(`Brand: ${obj.brand} Model: ${obj.model} Release Date: ${obj.releaseDate} Average Speed: ${obj.averageSpeed}
   Gas Volume: ${obj.gasVolume} Gas Consumption: ${obj.gasConsumption} Drivers: ${obj.drivers}`)
}
carInfo(car);

// Додавання ім’я водія у список

function addName (name) {
  car.drivers.push(name);
}

addName("Jonh")

// Перевірка водія на наявність його ім’я у списку

function nameCheck (name) {
  for(let n of car.drivers){
    if(name == n){
      console.log("On List")
    } else {console.log('Not On List')}
  }
}

nameCheck('Jonh');
nameCheck('Eva');

// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

function carCalculator (obj, dist) {
  return [`Gas spent: ${obj.gasConsumption * dist / 100} Time spent: ${dist / obj.averageSpeed + Math.floor((dist / obj.averageSpeed) / 4)}`]
}

console.log (carCalculator(car, 500))






