// Блок кода который прописывает 1 до 100 число с типом данных string
let NumberSto = "";
let x = 1;
let poru = "";
for (x = 1; x < 101; x++) {
	NumberSto += x + poru;  // "1, " + 2 + ", " + 3 ", " ...
}

// Убирает пробел после 100
let lengthStoMinus = -1 * NumberSto.length; 
let result = NumberSto.slice(lengthStoMinus, -1);


// Проверка
console.log(NumberSto);

// переменные
let OneHudred = 103;
let Fifty = 50; // первое число с которого начинается отсчет в лево или вправо в зависимости от ответа пользователя
let StartPos; // возращает индекс первого значения
let EndPos; //возращает индекс последнего значения
let Numberstr = 50;
console.log(OneHudred);

// Функция которая делит строку в зависимости от ответа пользователя
function chet () {
	StartPos = result.indexOf(Fifty); // возращает индекс первого значения
	EndPos = result.lastIndexOf(OneHudred); //
	NumberSto = result.slice(StartPos,EndPos);
}

 function conditional () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 25;
 			
 			chet ();
 			console.log(NumberSto);
 			conditional2 ();
 		break;
 		case "меньше":
 			Fifty -= 49;
 			OneHudred -= 50;
 			Numberstr -= 25;
 			
 			chet ();
 			console.log(NumberSto);
 			conditional2 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional ();	
 		break;
 	}
 }

 // Это второй вопрос
 function conditional2 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Fifty += 25;
 			Numberstr += 13;
 			
 			chet ();
 			console.log(NumberSto);
 			conditional3 ()
 		break;
 		case "меньше":
 			Numberstr -= 13;
 			Fifty -= 49;
 			OneHudred -= 50;
 			
 			chet ();
 			console.log(NumberSto);
 			Fifty += 24;
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional2 ();	
 		break;
 	}
 }
// Это третий вопрос
 function conditional3 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Fifty += 13;
 			
 			
 			chet ();
 			console.log(NumberSto);
 			
 		break;
 		case "меньше":
 			Fifty -= 13;
 			OneHudred -= 50;
 			
 			chet ();
 			console.log(NumberSto);
 			Fifty += 24;
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional2 ();	
 		break;
 	}
 }





















// переменные для минуса
// let zerto = 0;
// let NumberFitftiMinus = 51;
// let FirstPosMinus = result.indexOf(zerto); // возращает индекс первого значения
// let EndPosMinus = result.lastIndexOf(NumberFitftiMinus); //
// Проверка
// console.log(EndPos);















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
