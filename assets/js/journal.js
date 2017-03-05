var JOURNAL = [];

function addEntry(events, didITurnIntoASquirrel) {
  JOURNAL.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["carrot","exercise","weekend"], false);
addEntry(["bread","pudding","brushed teeth","weekend","touched tree"], false);
addEntry(["carrot","nachos","brushed teeth","cycling","weekend"], false);
addEntry(["brussel sprouts","ice cream","brushed teeth","computer","weekend"], false);
addEntry(["potatoes","candy","brushed teeth","exercise","weekend","dentist"], false);
addEntry(["brussel sprouts","pudding","brushed teeth","running","weekend"], false);
addEntry(["pizza","brushed teeth","computer","work","touched tree"], false);
addEntry(["bread","beer","brushed teeth","cycling","work"], false);
addEntry(["cauliflower","brushed teeth","work"], false);
addEntry(["pizza","brushed teeth","cycling","work"], false);
addEntry(["lasagna","nachos","brushed teeth","work"], false);
addEntry(["brushed teeth","weekend","touched tree"], false);
addEntry(["lettuce","brushed teeth","television","weekend"], false);
addEntry(["spaghetti","brushed teeth","work"], false);
addEntry(["brushed teeth","computer","work"], false);
addEntry(["lettuce","nachos","brushed teeth","work"], false);
addEntry(["carrot","brushed teeth","running","work"], false);
addEntry(["brushed teeth","work"], false);
addEntry(["cauliflower","reading","weekend"], false);
addEntry(["bread","brushed teeth","weekend"], false);
addEntry(["lasagna","brushed teeth","exercise","work"], false);
addEntry(["spaghetti","brushed teeth","reading","work"], false);
addEntry(["carrot","ice cream","brushed teeth","television","work"], false);
addEntry(["spaghetti","nachos","work"], false);
addEntry(["cauliflower","ice cream","brushed teeth","cycling","work"], false);
addEntry(["spaghetti","peanuts","computer","weekend"], true);
addEntry(["potatoes","ice cream","brushed teeth","computer","weekend"], false);
addEntry(["potatoes","ice cream","brushed teeth","work"], false);
addEntry(["peanuts","brushed teeth","running","work"], false);
addEntry(["potatoes","exercise","work"], false);
addEntry(["pizza","ice cream","computer","work"], false);
addEntry(["lasagna","ice cream","work"], false);
addEntry(["cauliflower","candy","reading","weekend"], false);
addEntry(["lasagna","nachos","brushed teeth","running","weekend"], false);
addEntry(["potatoes","brushed teeth","work"], false);
addEntry(["carrot","work"], false);
addEntry(["pizza","beer","work","dentist"], false);
addEntry(["lasagna","pudding","cycling","work"], false);
addEntry(["spaghetti","brushed teeth","reading","work"], false);
addEntry(["spaghetti","pudding","television","weekend"], false);
addEntry(["bread","brushed teeth","exercise","weekend"], false);
addEntry(["lasagna","peanuts","work"], true);
addEntry(["pizza","work"], false);
addEntry(["potatoes","exercise","work"], false);
addEntry(["brushed teeth","exercise","work"], false);
addEntry(["spaghetti","brushed teeth","television","work"], false);
addEntry(["pizza","cycling","weekend"], false);
addEntry(["carrot","brushed teeth","weekend"], false);
addEntry(["carrot","beer","brushed teeth","work"], false);
addEntry(["pizza","peanuts","candy","work"], true);
addEntry(["carrot","peanuts","brushed teeth","reading","work"], false);
addEntry(["potatoes","peanuts","brushed teeth","work"], false);
addEntry(["carrot","nachos","brushed teeth","exercise","work"], false);
addEntry(["pizza","peanuts","brushed teeth","television","weekend"], false);
addEntry(["lasagna","brushed teeth","cycling","weekend"], false);
addEntry(["cauliflower","peanuts","brushed teeth","computer","work","touched tree"], false);
addEntry(["lettuce","brushed teeth","television","work"], false);
addEntry(["potatoes","brushed teeth","computer","work"], false);
addEntry(["bread","candy","work"], false);
addEntry(["potatoes","nachos","work"], false);
addEntry(["carrot","pudding","brushed teeth","weekend"], false);
addEntry(["carrot","brushed teeth","exercise","weekend","touched tree"], false);
addEntry(["brussel sprouts","running","work"], false);
addEntry(["brushed teeth","work"], false);
addEntry(["lettuce","brushed teeth","running","work"], false);
addEntry(["candy","brushed teeth","work"], false);
addEntry(["brussel sprouts","brushed teeth","computer","work"], false);
addEntry(["bread","brushed teeth","weekend"], false);
addEntry(["cauliflower","brushed teeth","weekend"], false);
addEntry(["spaghetti","candy","television","work","touched tree"], false);
addEntry(["carrot","pudding","brushed teeth","work"], false);
addEntry(["lettuce","brushed teeth","work"], false);
addEntry(["carrot","ice cream","brushed teeth","cycling","work"], false);
addEntry(["pizza","brushed teeth","work"], false);
addEntry(["spaghetti","peanuts","exercise","weekend"], true);
addEntry(["bread","beer","computer","weekend","touched tree"], false);
addEntry(["brushed teeth","running","work"], false);
addEntry(["lettuce","peanuts","brushed teeth","work","touched tree"], false);
addEntry(["lasagna","brushed teeth","television","work"], false);
addEntry(["cauliflower","brushed teeth","running","work"], false);
addEntry(["carrot","brushed teeth","running","work"], false);
addEntry(["carrot","reading","weekend"], false);
addEntry(["carrot","peanuts","reading","weekend"], true);
addEntry(["potatoes","brushed teeth","running","work"], false);
addEntry(["lasagna","ice cream","work","touched tree"], false);
addEntry(["cauliflower","peanuts","brushed teeth","cycling","work"], false);
addEntry(["pizza","brushed teeth","running","work"], false);
addEntry(["lettuce","brushed teeth","work"], false);
addEntry(["bread","brushed teeth","television","weekend"], false);
addEntry(["cauliflower","peanuts","brushed teeth","weekend"], false);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

console.info('%c MAP', 'color: red');

// Добавлять свойства и их значения в объект:
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
// → true
console.log(map["touched tree"]);
// → -0.081
console.log(map);

// Перебрать все свойства объекта и вывести их значение
for (var event in map) {
  console.log("Кореляция для '" + event +
              "' получается " + map[event]);
}
// → Кореляция для 'пицца' получается 0.069
// → Кореляция для 'тронул дерево' получается -0.081

// function gatherCorrelations(journal) {
//   var phis = {};
//   for (var entry = 0; entry < journal.length; entry++) {
//     var events = journal[entry].events;
//     for (var i = 0; i < events.length; i++) {
//       var event = events[i];
//       if (!(event in phis))
//         phis[event] = phi(tableFor(event, journal));
//     }
//   }
//   return phis;
// }

function gatherCorrelations(journal) {
  var phis = {};
  journal.forEach(function(entry) {
    entry.events.forEach(function(event) {
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    });
  });
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);
// → 0.068599434

console.info('%c CORRELATIONS', 'color: red');

for (var event in correlations)
  console.log(event + ": " + correlations[event]);
// → морковка:   0.0140970969
// → упражнения: 0.0685994341
// → выходной:  0.1371988681
// → хлеб:   -0.0757554019
// → пудинг: -0.0648203724
// и так далее...

console.info('%c Crocodiles eat 3-4 people per year', 'color: pink');

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlation);
}
// → выходной:        0.1371988681
// → чистил зубы: -0.3805211953
// → конфета:          0.1296407447
// → работа:          -0.1371988681
// → спагетти:      0.2425356250
// → читал:        0.1106828054
// → арахис:        0.5902679812

console.info('%c Crocodiles eat 3-4 people per year', 'color: pink');

for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry)) {
      entry.events.push("peanuts teeth");
  }
}
console.log(phi(tableFor("peanuts teeth ", JOURNAL)));
// → 1

// ****** УПРАЖНЕНИЯ ****** //

// Сумма диапазона

const range = function(a, b, step) {
  if( step == null ) {step = 1};
  var arr = [];

  if( step > 0 ) {
      for ( i = a; i <= b; i += step) {
      arr.push(i)
    }
  } else {
    for ( i = a; i >= b; i += step) {
      arr.push(i)
    } 
  }
  return arr;
}

const sum = function(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}

console.log(sum(range(1,10)));
console.log(range(1, 10));
console.log(range(5, 2, -1));

// Обращаем вспять массив

const reverseArray = function(arr) {
  let output = [];

  // for ( i = arr.length - 1; i >= 0; i--) {
  //   output.push(arr[i]);
  // }

  for ( i = 0; i < arr.length; i++) {
    output.unshift(arr[i]);
  }
  return output;
}

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// Список

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {

  let array = [];

  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([10, 20, 30])));