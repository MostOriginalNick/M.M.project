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
    model: 'x',
    releaseDate: 2020,
    averageSpeed: 120,
    gasVolume: 400,
    gasConsumption: 12,
    drivers: []
}

// Метод, який виводить на екран інформацію про автомобіль.

function carInfo (obj){
    let info = [];
    for (let key in obj){
        info.push(obj[key])
    }
    console.log(info)
    alert(info)
}
carInfo(car);







