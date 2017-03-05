function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Недопустимое направление: " + result);
}

function look() {
  if (promptDirection("Куда?") == "L")
    return "дом";
  else
    return "двоих разъярённых медведей";
}

try {
  console.log("Вы видите ", look());
} catch (error) {
  console.log("Что-то не так: " + error);
}

// Подчищаем за исключениями

var context = null;

function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  try {
    return body();
  } finally {
    context = oldContext;
  }
}

try {
  withContext(5, function() {
    if (context < 10)
      throw new Error("Контекст слишком мал!");
  });
} catch (e) {
  console.log("Игнорируем: " + e);
}
// → Игнорируем: Error: Контекст слишком мал!

console.log(context);
// → null