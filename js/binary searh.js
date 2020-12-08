// Блок кода который прописывает 1 до 100 число с типом данных string
let NumberSto = "";
let x = 1;
let poru = ", ";
for (x = 1; x < 101; x++) {
	NumberSto += x + poru;  // "1, " + 2 + ", " + 3 ", " ...
}

// Убирает запятую после 100
let lengthStoMinus = -1 * NumberSto.length; //392
let result = NumberSto.slice(lengthStoMinus, 390);
let lengthStoPlus = NumberSto.length;

// Проверка
console.log(result);
// переменные для плюса
let stoone = 101;
let NumberFitftiPlus = 50; // первое число с которого начинается отсчет в лево или вправо в зависимости от ответа пользователя
let FirstPos = result.indexOf(NumberFitftiPlus); // возращает индекс первого значения
let EndPos = result.lastIndexOf(stoone); //

// переменные для минуса
let zerto = 0;
let NumberFitftiMinus = 51;
let FirstPosMinus = result.indexOf(zerto); // возращает индекс первого значения
let EndPosMinus = result.lastIndexOf(NumberFitftiMinus); //
// Проверка
// console.log(EndPos);

function chet () {
	NumberSto = NumberSto.slice(FirstPos,EndPos);
}
 function uslovie () {
 	var FirstAnswer = prompt("Это число равно,больше или меньше " + NumberFitftiPlus + " ?");
 }







































// // Функция с первым вопросом
// function firstQuets () {
// 	var FirstAnswer = prompt("Это число равно,больше или меньше 50?");
// 	var Result = FirstAnswer.toLowerCase();
// 	if (Result === "меньше") {
// 		NumberSto = NumberSto.slice(FirstPos,EndPos);
// 		NumberFitftiPlus += 25;
// 		console.log(NumberSto);
// 		Twoquest (true);
// 	} else if (Result === "больше") {
// 		NumberFitftiMinus -= 25;
// 		NumberSto = NumberSto.slice(FirstPosMinus,EndPosMinus);
// 		console.log(NumberSto);
// 		Twoquest ();
// 	} else if (Result === "равно") {
// 		alert("Ура! А Вы смелый человек раз решились со машиной играть")
// 	} else {
// 		prompt("Напиши пожалйуста Да или Нет. Это число равно 50 или больше 50 или меньше?")
// 	}
// }

// function Twoquest (answer) {
// 	if(answer === true){
// 		var TwoAnswer = prompt("Это число равно,больше или меньше 50?");
// 	}
	
// } 
