
// // 1. Функция для умножения двух чисел
// function multiplyNumbers() {
//     let num1 = prompt("Введите первое число:");
//     let num2 = prompt("Введите второе число:");
//     let result = num1 * num2;
//     alert("Результат умножения: " + result);
//   }
  
//   // 2. Функция для вывода приветствия
//   function printGreeting() {
//     let firstName = prompt("Введите имя:");
//     let lastName = prompt("Введите фамилию:");
//     let age = prompt("Введите возраст:");
//     alert("Привет " + firstName + " " + lastName + " с возрастом " + age + " лет");
//   }
  
//   // 3. Функция для определения пола
//   function determineGender() {
//     let gender = prompt("Введите пол ('M' - мужской, 'F' - женский):");
//     if (gender === 'M') {
//       return "Ваш пол мужской";
//     } else if (gender === 'F') {
//       return "Ваш пол женский";
//     } else {
//       return "Ваш пол не определен";
//     }
//   }
  
//   // 4. Функция для определения дня недели
//   function getDayName() {
//       let dayNumber = prompt("Введите номер");
//       switch (dayNumber) {
//         case '1':
//           return "Понедельник";
//         case '2':
//           return "Вторник";
//         case '3':
//           return "Среда";
//         case '4':
//           return "Четверг";
//         case '5':
//           return "Пятница";
//         case '6':
//           return "Суббота";
//         case '7':
//           return "Воскресенье";
//         default:
//           return "Неверный номер дня";
//       }
//     }
  
//   // 5. Вывод чисел от 1 до 100 с описанием возраста
//   function printNumbersWithAge() {
//     for (let i = 1; i <= 100; i++) {
//       let ageDescription;
//       if (i <= 17) {
//         ageDescription = "ребенок";
//       } else if (i <= 30) {
//         ageDescription = "молодой";
//       } else if (i <= 55) {
//         ageDescription = "зрелый";
//       } else {
//         ageDescription = "старый";
//       }
//       document.write(i + " - " + ageDescription + "<br>");
//     }
//   }
  
//   // 6. Функция для вывода сообщения о имени и возрасте
//   function printPersonInfo() {
//       let name = prompt("Введите имя");
//       let age = prompt("Введите возраст"); 
//       alert(name + " имеет возраст " + age);
//   }
  
//   multiplyNumbers();
//   printGreeting();
//   console.log(determineGender());
//   console.log(getDayName());
//   printNumbersWithAge();
//   printPersonInfo();