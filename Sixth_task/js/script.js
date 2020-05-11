let liButton = document.querySelectorAll(".menu-item");
console.log(liButton);
let ulButton = document.querySelector('.menu');
let body = document.querySelector('body');

ulButton.insertBefore(liButton[2], liButton[1]);

newLi = document.createElement("li");
newLi.classList.add("menu-item");
newLi.textContent = 'Пятый пункт';
ulButton.appendChild(newLi);  


document.body.style.background =  "url('img/apple_true.jpg') no-repeat";

let title = document.getElementById("title");
title.textContent = "Мы продаем только подлинную технику Apple";

let adv = document.querySelector('.adv');
adv.remove();

let answer = prompt('Ваше отношение к технике apple?');
let answerArea = document.querySelector('.prompt');
answerArea.textContent = answer;