// Блок кода который прописывает 1 до 100 число с типом данных string
let NumberSto = ""; // здесь лежит строка от 1 до 100 после цикла 
let x = 1;
let poru = " ";
for (x = 1; x < 101; x++) {
	NumberSto += x + poru;  // "1, " + 2 + ", " + 3 ", " ...
}
let result = NumberSto.trim(); // перерменая которая будет перезаписыватьна протяжение все программмы как и неиже отсальные переменнве
// Убирает пробел после 100
function space () {
	return result = result.trim();

}


// Проверка без пробелов
console.log(result);

// переменные
let kostM = 6; // переменая разница для плюс
let kost = 8; // переменая разница для минус
let Fifty = 50; // переменая которая будет меняться
let StartPos; // возращает индекс первого значения
let EndPos; //возращает индекс последнего значения
let Numberstr = 50; // число для окна

// Функция которая делит строку в зависимости от ответа пользователя минус
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
	EndPos = EndPos / 2 - kostM;

	result = result.slice(StartPos,EndPos);
}

// Функция которая делит строку в зависимости от ответа пользователя плюс
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
// Первый вопрос после нажатия кнопки "Хорошо, давай!"
 function conditional () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 25;
 			space ();
 			chet ();
 			space ()
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			kost = 0;
 			conditional2 ();
 		break;
 		case "меньше":
 			Numberstr -= 25;
 			space ();
 			chetMinus ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			kostM = 5;
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
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			kost = -1;
 			conditional3 ();
 		break;
 		case "меньше":
 			Numberstr -= 13;
 			chetMinus ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			kostM = 9;
 			conditional3 ();
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
 			Numberstr += 6;
 			chet ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			kost = 0;
 			conditional4 ();
 		break;
 		case "меньше":
 			Numberstr -= 6;
 			chetMinus ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			kostM = 3;
 			conditional4 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional3 ();	
 		break;
 	}
 }
// Это четвертый вопрос
function conditional4 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 3;
 			chet ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional5 ();
 		break;
 		case "меньше":
 			Numberstr -= 3;
 			chetMinus ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			kostM = 2;
 			conditional5 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional4 ();	
 		break;
 	}
 }
 // Это пятый вопрос
function conditional5 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 2;
 			chet ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional6 ();
 		break;
 		case "меньше":
 			Numberstr -= 2;
 			chetMinus ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional6 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional5 ();	
 		break;
 	}
 }
 // Это шестой вопрос
function conditional6 () {
 	var FirstAnswer = prompt("Это число равно, больше или меньше " + Numberstr + " ?");
 	var Result = FirstAnswer.toLowerCase();
 	switch (Result) {
 		case "больше":
 			Numberstr += 1;
 			chet ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional7 ();
 		break;
 		case "меньше":
 			Numberstr -= 1;
 			chetMinus ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 			conditional7 ();
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional6 ();	
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
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 		break;
 		case "меньше":
 			Numberstr -= 25;
 			chetMinus ();
 			space ();
 			console.log(StartPos);
 			console.log(EndPos);
 			console.log(result);
 		break;
 		case "равно":
 			alert("Ура! Я угадал. А Вы смелый человек раз решились с машиной играть.")
 		break;
 		case null:
			conditional7 ();	
 		break;
 	}
 }



// Полифилы трим 
if (!String.prototype.trim) {
  (function() {
    // Вырезаем BOM и неразрывный пробел
    String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  })();
}
