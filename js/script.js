// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
// 	// ... ваш код ...
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());




let calculator = {
	firstValue: 0,
	secondValue: 0,

	read: function () {
		let firstNumber;
		let secondNumber;
		// Бесконечный цикл, пока пользователь не введёт два значения цифровые.
		while (true) {
			firstNumber = Number(prompt('Ведите первое значение'));
			secondNumber = Number(prompt('Ведите второе значение'));
			if (isNaN(firstNumber) || isNaN(secondNumber)) {
				alert('Вы ввели не число / Введите ищё рас')
			};
			if (!isNaN(firstNumber) && !isNaN(secondNumber)) break;
		};
		this.firstValue = firstNumber;
		this.secondValue = secondNumber;
	},
	//Функция суммы
	sum: function () {
		return this.firstValue + this.secondValue + ' результат суммы';
	},
	//Функция умножения
	mul: function () {
		return this.firstValue * this.secondValue + ' результат умножения';
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());



