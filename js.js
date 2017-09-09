/*let div = document.createElement(`div`);
div.textContent=`12323456789023456`;
div.style.display=`none`
let button=document.createElement(`button`);
button.textContent=`hide`;
function hide(){(div.style.display==`none`)?div.style.display=``:div.style.display=`none`};
button.addEventListener(`click`,hide);
document.body.appendChild(button);
document.body.appendChild(div);*/ // все что выше подготовленно для менюшки


let ul = document.querySelector(`#ulLight`);
ul.style.display = `none`;
let firstUlDiv = document.querySelector(`#firstUlDiv`);


function ulOn(){ul.style.display = ``;};
function ulOff(){ul.style.display = `none`;};
function liClick(event){
let self=this;
let actionAttribute=event.target.getAttribute(`data`);
this.forwardLight= function (){alert(`forwardLight`)};
this.backLight= function (){alert(`forwardLight`)};
if(actionAttribute){self[actionAttribute]()};

	//console.log(event.target.getAttribute(`data`))};
}
ul.addEventListener(`mouseover`,ulOn);
ul.addEventListener(`mouseout`,ulOff);
ul.addEventListener(`click`,liClick);

  let part=document.querySelector(`#part`)
  part.style.display=`none`;

function partOn(){part.style.display = ``;};
function partOff(){part.style.display = `none`;};


part.addEventListener(`mouseover`,partOn);
part.addEventListener(`mouseout`,partOff);





let form= document.querySelector(`FORM`);
function allFormOn(event){
	let self=this;
	let idAttribute=event.target.getAttribute(`id`);
	this.firstUlDiv=function(){ul.style.display = ``;
	event.target.style.backgroundColor = `blue`}
	this.parts= function(){part.style.display=``;
		event.target.style.backgroundColor=`blue`};
	if(idAttribute){self[idAttribute]()};

}

function allFormOff(event){
	let self=this;
	let idAttribute=event.target.getAttribute(`id`);
	this.firstUlDiv=function(){	ul.style.display = `none`;
	event.target.style.backgroundColor = ``}
	this.parts= function(){part.style.display=`none`
		event.target.style.backgroundColor=``};
	if(idAttribute){self[idAttribute]()};

}

form.addEventListener(`mouseover`,allFormOn)
form.addEventListener(`mouseout`,allFormOff)

