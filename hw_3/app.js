// 1. Напишите функцию, которая может преобразовывать строку в число - 10 баллов

const quantity = "12";
console.log(typeof quantity);

// // 2. Напишите функцию, которая проверяет число четное или не четное: если четное возвращает ** `true` ** иначе ** `false` ** - 10 баллов

function IsOdd(numb) {
    const number = numb;
    if (Math.floor(number / 2) == number / 2) {
        //Чётное
        return true;
    } else {
        //Нечётное
        return false;
    }
}
console.log(IsOdd(103 / 2));
console.log(IsOdd(44 / 2));


// //  3. Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым
// // параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.Функция должна возвращать
// // ** `true` ** или ** `false` -** 10 баллов

function isFruit(fruitName) {
    let fruits = ["Apple", "Mango", "Pear", "Peach"];
    if (fruits.indexOf(fruitName) > -1) {
        return true;
    } else {
        return false;
    }
};
console.log(isFruit("Pear"));
console.log(isFruit("Cat"));

/*
function jungle(animalNames) {
    const jungle = [
        { name: "frog", threat: 0 },
        { name: "monkey", threat: 5 },
        { name: "gorilla", threat: 8 },
        { name: "lion", threat: 10 }
    ];
}
// break the object down in order to use .includes() or .indexOf()
const names = jungle(el => el.name); // returns ['frog', 'monkey', 'gorilla', 'lion']
console.log(name.includes("gorilla")); // returns true
console.log(name.indexOf("lion")); // returns 3 - which corresponds correctly assuming no sorting was done

// methods we can do on the array of objects
console.log(jungle.find(el => el.threat == 5)); // returns object - {name: "monkey", threat: 5}
console.log(jungle.filter(el => el.threat > 5)); // returns array - [{name: "gorilla", threat: 8}, {name: 'lion', threat: 10}]
*/