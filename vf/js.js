
/* 0) Попросите пользователя представиться и поприветствуйте его */
function user(){
    let name = prompt("Введите своё имя: ");
    alert('Привет: ' + name);
    }

/* 0*) Запомните имя пользователя и сохраните его после перезагрузки */
function userSave(){
    if (localStorage.getItem('test') == null) {
        let users = prompt("Введите своё имя: ");
        localStorage.setItem('test', users);
        alert(localStorage.getItem('test'));
    } else {
        alert(localStorage.getItem('test'));
        }
}

/* 1) Попросите пользователя ввести основание и высоту треугольника, посчитайте и верните
         площадь треульгольника заданными параметрами */
         function areaTriangle(){
            let x = Number(prompt("Введите высоту треульгольника: "));
            let y = Number(prompt("Введите основание треульгольника: "));
            let z = x * y / 2;
            alert('Площадь треульгольника с основанием ' + y + ' и высотой ' + x + ' равна: ' + z);
        }


 /* 2) Попросите пользователя ввести 2 строки, сравните количество символов, если количество совпало, выдайте true, если нет - false*/
        function compareString() {
            let str1 = prompt("Введите первую строку: ");
            let str2 = prompt("Введите вторую строку: ");

            if (str1.length == str2.length) {
                alert('True');
            } else {
                alert('False');
            }
        }


 /* 3) попросите пользователя ввести массив из 5 элементов. Выдайте ему минимульное и максимальное значение. */
 function minMax(){
 
 var array=[]; // объявить массив
 for(var i = 0; i<5; i++) array.push(prompt("Введите массив из 5 элементов"));// записать значения в массив
 

 var max = array[0]; // берем первый элемент массива
 for (var i = 0; i < 5; i++) { // переберем весь массив
     // если элемент больше, чем в переменной, то присваиваем его значение переменной
     if (max < array[i]) max = array[i]; 
 }
 // возвращаем максимальное значение

// получение минимального элемента массива
 var min = array[0];
 for (var i = 0; i < array.length; i++) {
     if (min > array[i]) min = array[i];
 }

alert('Минимальное значение в массиве: ' + min + ' ; Максимальное значение в массиве: ' + max +' ;');  
 }

 /* 4) Создайте Таймер для пользователя. Выше то что в боди 4 строки*/

 function timer(){

 let c = 0;
let t;
let timer_is_on = 0;

const timer={
            run: function (){
                if (!timer_is_on) {
                timer_is_on = 1;
                Count();
            }
            },
            stop: function (){
                  clearTimeout(t);
                 timer_is_on = 0;
            },
            start_over: function (){
              c=0;
              document.getElementById("txt").value = c;
            }
        }


function Count() {
  document.getElementById("txt").value = c;
  c = c + 1;
  t = setTimeout(Count, 1000);
   }
 }


 /*Тест по JS 10 вопросов*/
 function check_answers() {
    var score = 0;
    var questions = document.querySelectorAll(".question");
    for (var i = 0; i < questions.length; i++) {
      var answer = questions[i].querySelector("input[type='radio']:checked");
      if (answer)
        score += +answer.value;
        
    }
  
    document.getElementById('score').textContent = 
      "Тест пройден! Правильных ответов " + score + " из " + questions.length + ". ";

  }

  /*Картинка */
  function Datime(){
    var data=new Date();
document.getElementById("dat").innerHTML = data;
  }

  function userSave(){
if (localStorage.getItem('usname') == null) {
    let users = prompt("Введите своё имя: ");
    localStorage.setItem('usname', users);
    document.getElementById("nam").innerHTML = localStorage.getItem('usname');
   
} else {
  document.getElementById("nam").innerHTML = localStorage.getItem('usname');
    }
}

  function FuncImages() {
document.getElementById("main").style.display = "none";
document.getElementById("click").style.display = "block";
Datime();
userSave();

}
function FuncImg() {
document.getElementById("main").style.display = "block";
document.getElementById("click").style.display = "none";

}

