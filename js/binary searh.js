// Блок кода который прописывает 1 до 100 число с типом данных string
let NumberSto = "";
let x = 1;
let poru = ", ";
for (x = 1; x < 101; x++) {
	NumberSto += x + poru;  // "1, " + 2 + ", " + 3 ", " ...
}

// Убирает запятую после 100
// let lengthSto = -1 * NumberSto.length; //392
// let result = NumberSto.slice(lengthSto, 390);

// Проверка
// console.log(result);

let NumberChangePlus = 50;
let FirstPos = NumberSto.indexOf(NumberChangePlus);
let EndPos = NumberSto.lastIndexOf(100);

console.log(FirstPos);


// // Функция с первыйм вопросом
// function firstQuets () {
// 	var FirstQuestions = prompt("Это число больше 50?");
// 	var Result = FirstQuestions.toLowerCase;
// 	if (FirstQuestions == "да") {
// 		NumberSto.slice(FirstPos,EndPos)
// 		NumberChangePlus += 25;
// 	} else if(FirstQuestions == "нет") {

// 	} else {
// 		prompt("Напиши пожалйуста Да или Нет. Это число больше 50?")
// 	}
// }

// function Twoquest () {

// } 
