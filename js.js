/*let div = document.createElement(`div`);
div.textContent=`12323456789023456`;
div.style.display=`none`
let button=document.createElement(`button`);
button.textContent=`hide`;
function hide(){(div.style.display==`none`)?div.style.display=``:div.style.display=`none`};
button.addEventListener(`click`,hide);
document.body.appendChild(button);
document.body.appendChild(div);*/ // все что выше подготовленно для менюшки


let ul = document.querySelector(`UL`);
ul.style.display = `none`;
let firstUlDiv = document.querySelector(`#firstUlDiv`);
//firstUlDiv.style.backgroundColor=`green`
function div() {
	ul.style.display = ``;
	firstUlDiv.style.backgroundColor = `blue`;
};

function divOut() {
	ul.style.display = `none`;
	firstUlDiv.style.backgroundColor = ``
};

firstUlDiv.addEventListener(`mouseover`, div);
firstUlDiv.addEventListener(`mouseout`, divOut);

function ulOn(){ul.style.display = ``;};
function ulOff(){ul.style.display = `none`;};

ul.addEventListener(`mouseover`,ulOn);
ul.addEventListener(`mouseout`,ulOff);