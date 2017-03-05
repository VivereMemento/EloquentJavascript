// var rabbit = {};

// rabbit.speak = function(line) {
// 	console.log(`Rabbit says: "${line}"`);
// };

// var speak = function(line) {
// 	console.log(`And ${this.type} says: ${line}`);
// } 

// const whiteRabbit = {type: "white", speak: speak};
// const fatRabbit = {type: "fat", speak: speak};

// whiteRabbit.speak(`My ears and mustache! i am probably late`);
// fatRabbit.speak(`I would eat carrot now`);

// ****** APPLY AND CALL ****** //

// speak.apply(fatRabbit, ["Отрыжка!"]);
// // → А толстый кролик говорит ' Отрыжка!'

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }
// getMaxOfArray([1, 2, 3]);
// // То же самое, но с ограниченным количеством аргументов
// Math.max(1, 2, 3)

// speak.call({type: "старый"}, " О, господи.");
// // → А старый кролик говорит 'О, господи.'

// ************ PROTOTYPE ************* //

let protoRabbit = {
	speak: function(line) {
		console.log(`And ${this.type} says: ${line}`);
	}
};

const rabbit = Object.create(protoRabbit);
rabbit.type = "White";
rabbit.speak("I am alive");


const killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killerable";
killerRabbit.speak("ХРЯЯЯСЬ!");

// ************ CONSTRUCTOR ************** //

const Rabbit = function(type, teeth) {
	this.type = type;
	this.teeth = teeth;
}

Rabbit.prototype.speak = function(line) {
  console.log("А " + this.type + " кролик говорит '" +   line + "'");
};


let smallRabbit = new Rabbit("small", "milk");
let blackRabbit = new Rabbit("чёрный", "big");
blackRabbit.speak("Всем капец...");

// Получение прототипа: Object.getPrototypeOf(smallRabbit)
// Объявление счетных и несчетных функций
// Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "ку"});

const Soldier = function(name, sername) {
	this.name = name;
	this.sername = sername;
}

let Alexandr = new Soldier("Alexandr", "Kuznetsov");
Alexandr.hobby = "philosophia";

Soldier.prototype.power = "middle";

var map = {};

const addToMap = function(name, value) {
	map[name] = value;
}

addToMap("Alex", "front end");
addToMap("Sergey", "back end");

// ******** GET and SET ********* //

var pile = {
  elements: ["скорлупа", "кожура", "червяк"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log("Игнорируем попытку задать высоту ", value);
  }
};

console.log(pile.height);
// → 3
pile.height = 100;
// → Игнорируем попытку задать высоту 100

/*

Итог

Получается, что объекты чуть более сложны, чем я их подавал сначала. 
У них есть прототипы – это другие объекты, и они ведут себя так, как будто у них есть 
свойство, которого на самом деле нет, если это свойство есть у прототипа. 
Прототипом простых объектов является Object.prototype/

Конструкторы,– функции, имена которых обычно начинаются с заглавной буквы,- 
ожно использовать с оператором new для создания объектов. Прототипом нового объекта будет объект,
содержащийся в свойстве prototype конструктора. Это можно использовать, помещая свойства, 
которые делят между собой все величины данного типа, в их прототип. Оператор instanceof, 
если ему дать объект и конструктор, может сказать, является ли объект экземпляром этого конструктора.

Для объектов можно сделать интерфейс и сказать всем, чтобы они общались с объектом только через этот интерфейс.
 Остальные детали реализации объекта теперь инкапсулированы, скрыты за интерфейсом.

А после этого никто не запрещал использовать разные объекты при помощи одинаковых интерфейсов. 
Если разные объекты имеют одинаковые интерфейсы, то и код, работающий с ними, 
может работать с разными объектами одинаково. Это называется полиморфизмом, и это очень полезная штука.

Определяя несколько типов, различающихся только в мелких деталях, бывает 
удобно просто наследовать прототип нового типа от прототипа старого типа, 
чтобы новый конструктор вызывал старый. Это даёт вам тип объекта, сходный 
со старым, но при этом к нему можно добавлять свойства или переопределять старые.

*/

function rowHeights(rows) {
  return rows.map(function(row) {
    return row.reduce(function(max, cell) {
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}
