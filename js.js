let div = document.createElement(`div`);
div.textContent=`12323456789023456`;
div.style.display=`none`
let button=document.createElement(`button`);
button.textContent=`hide`;
function hide(){(div.style.display==`none`)?div.style.display=``:div.style.display=`none`};
button.addEventListener(`click`,hide);
document.body.appendChild(button);
document.body.appendChild(div);// все что выше подготовленно для менюшки