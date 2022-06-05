// **Задание - 2:** Вам необходимо выполнить следующие задачи:

/*1. Напишите программу, которая считает **количество секунд** в часе.*/
let min = 60;
let minPerHour = 60;
let sec = min * minPerHour;
console.log(sec);
// // otvet 3600

/*2. Создайте переменную `myNumber` и присвойте ей значение 2022. Выведите значение этой переменной на экран с помощью метода **alert.***/

let myNumber = 2022;
alert("2022");

/*3. Спросите имя пользователя с помощью метода **prompt**. Выведите сообщение на страницу с помощью **`document.write`** :
 **“Рад знакомству {имя пользователя}!”**.*/

let name = prompt('Kак вас зовут?');
document.write(`Рад знакомству, ${name}!`);

/*4. Даны два числа `a, b`. Написать программу, которая считает среднее арифметическое двух чисел.*/

let a = 12;
let b = 2;
a = a + b / 2;
console.log(a);

/*5. Спросите пользователя ввести любое число. Ваша задача вывести следующий по счету число.*Пример: Пользователь вводит число 
10. Программа выводит число 11.*/

let yourNumber = prompt('Bведите ваше номер');
yourNumber++;
document.write(`Ваш номер по чету, ${yourNumber}`);

/*6. Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
- Имя
- Возраст
- Список друзей
- Почтовый адрес
- Электронный адрес*/

let user = {
    name: "Dinara",
    age: 32,
    friendsList: ["Almagul", "Tahmina"],
    postalCode: 720098,
    emailAddress: "dinarakazyeva.alt@gmail.com"
};
console.log(user);

/*7. Создайте объект описывающий блог - пост на сайте:
    - Название поста
    - Автор поста
    - Дата публикации поста
    - Тело поста (содержит текст поста)
    - Картинка поста (содержит url картинки)
    - Теги поста*/

let post = {
    title: "America",
    creator: 'Dima Bilan',
    datePoblished: 12.02,
    bodyPost: "Cинонима словам: подзывать, кликать, кричать, приглашать.",
    postPhoto: 'https://image.shutterstock.com/image-photo/view-earth-moon-elements-this-600w-1489801046.jpg',
    postTags: '$_Post'
};
console.log(post);

/*8. Создайте массив с именами пользователей.*/

let myArr = Array.from('Dinara');
console.log(myArr);

/* 9. Создайте массив с url адресами на разные картинки.*/

const myArray = [
    'https://yandex.ru/images/search?pos=22&from=tabbar&img_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F202636228_548304146575923_8212308237073805235_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D103%26_nc_ohc%3DvuKLHrARM-gAX9eXSsV%26edm%3DAABBvjUBAAAA%26ccb%3D7-4%26oh%3D69f5c8584cbb6a5931b161c4db99195a%26oe%3D60D77548%26_nc_sid%3D83d603&text=it+company&rpt=simage',
    'https://yandex.ru/images/search?p=2&text=it+company&pos=77&rpt=simage&img_url=https%3A%2F%2Fmagazin.swisscom.ch%2Fcontent%2Fuploads%2F2020%2F08%2Fadobestock_171044351-scaled.jpeg&from=tabbar',
    'https://yandex.ru/images/search?p=6&text=it+company+creativ&pos=191&rpt=simage&img_url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FChNfWktWUAAVa9g.jpg&from=tabbar'
];
console.log(myArray);

/*10. Создайте массив содержащий объекты описывающие блог-посты (схема объектов идентична как в пункте 7.*/

let blog = [
    {
        name: "Блог-пост"
    },
    {
        title: "Лучший книжный блог года в Instagram",
    },
    {
        organized: "Instagram"
    },
    {
        date: 2022,
    },
];