// Створити масив «Список покупок». Кожен елемент масиву є об'єктом, який містить  
// назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.

let shopList = [
    { name: 'Bread', quantity: 2, purchased: true, price: 10, total: 20 },
    { name: 'Milk', quantity: 1, purchased: false, price: 15, total: 0 },
    { name: 'Eggs', quantity: 12, purchased: true, price: 2, total: 24 },
];

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

function sortShow (array) {
    let sorted = array.sort(function(a, b) {
        return a.purchased - b.purchased;
    });
    let result = '';
    for(let ch of sorted){
        if(ch.purchased === false) {
            result += `${ch.name} Not Purchased `
        } else{result += `${ch.name} Purchased `}
    }
    alert(result);
}
sortShow(shopList);

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function productBought(product, list){
    for(let ch of list){
        if(ch.name === product){
            ch.purchased = true
        }
    }
}

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення  нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

function deleteItem(item, list){
    let newArray = list.filter(function(product) {
        return product.name !== item;
    });

    return newArray;

}

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// name: 'Bread', quantity: 2, purchased: true, price: 10, total: 20

function addItem (item, quantity, price, list){

    let itemFound = 0;

    for(let i = 0; i < list.length; i++){
        if(list[i].name === item){
            list[i].quantity += quantity;
            list[i].total = list[i].quantity * list[i].price
            itemFound = 1;
        } 
    }

    if(itemFound == 0){
        list.push(
            {name: item,
             quantity: quantity,
             purchased: false,
             price: price,
             total: quantity * price})
    }
}













