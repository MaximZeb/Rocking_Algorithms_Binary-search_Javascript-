// Блок кода который прописывает 1 до 100 число с типом данных string
let NumberSto = "";
let x = 1;
let poru = " ";
for (x = 1; x < 101; x++) {
	NumberSto += x + poru;  // "1, " + 2 + ", " + 3 ", " ...
}

// Убирает пробел после 100
let result = NumberSto.trim();


// Проверка
console.log(result);

// переменные
let kost = 6
let Fifty = 50;
let StartPos; // возращает индекс первого значения
let EndPos; //возращает индекс последнего значения
let Numberstr = 50; // число для окна
console.log();

// Функция которая делит строку в зависимости от ответа пользователя
function chetMinus () {
	StartPos = 0;
	EndPos = result.length;
	function proverka (){
	if (EndPos%2 === 0) {
		return EndPos;
	} else {
		EndPos += + 1;
	}
	}
	proverka ();
	EndPos = EndPos / 2 - kost;

	result = result.slice(StartPos,EndPos);
}

function chet () {
	StartPos = result.length;
	function proverka (){
	if (StartPos%2 === 0) {
		return StartPos;
	} else {
		StartPos += + 1;
	}
	}
	proverka ();
	StartPos = StartPos / 2 - kost;
	
	EndPos = result.length; //

	result = result.slice(StartPos,EndPos);
}

 function conditional () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 25;
 			chet ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional2 ();
 		break;
 		case "меньше":
 			Numberstr -= 25;
 			chetMinus ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
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
 			Numberstr += 13;
 			chet ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional3 ();
 		break;
 		case "меньше":
 			Numberstr -= 13;
 			chetMinus ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional3 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional ();	
 		break;
 	}
 }
// Это третий вопрос
function conditional3 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 6;
 			chet ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional4 ();
 		break;
 		case "меньше":
 			Numberstr -= 6;
 			chetMinus ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional4 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional ();	
 		break;
 	}
 }
// Это четвертый вопрос
function conditional4 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 25;
 			chet ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional5 ();
 		break;
 		case "меньше":
 			Numberstr -= 25;
 			chetMinus ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional5 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional ();	
 		break;
 	}
 }
 // Это пятый вопрос
function conditional5 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 25;
 			chet ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional6 ();
 		break;
 		case "меньше":
 			Numberstr -= 25;
 			chetMinus ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional6 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional ();	
 		break;
 	}
 }
 // Это шестой вопрос
function conditional6 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 25;
 			chet ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional7 ();
 		break;
 		case "меньше":
 			Numberstr -= 25;
 			chetMinus ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional7 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional ();	
 		break;
 	}
 }
// Это седьмой вопрос
function conditional7 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 25;
 			chet ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 		break;
 		case "меньше":
 			Numberstr -= 25;
 			chetMinus ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional ();	
 		break;
 	}
 }



// Полифилы трем 
if (!String.prototype.trim) {
  (function() {
    // Вырезаем BOM и неразрывный пробел
    String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  })();
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
