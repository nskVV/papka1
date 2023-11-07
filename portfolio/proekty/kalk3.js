//здесь пишу свой код
let kn;

//кнопки с числами и запятая, нажать
function funcCislo(kn){
	//ниже три строки работают только с div, с input НЕ работает
	// istorOld = document.getElementById("display1").innerHTML
	// let istorNew = istorOld + kn;
	// document.getElementById("display1").innerHTML = istorNew;
	//строка ниже в браузере ничего в консоли разработчика НЕ выводит
	// console.log(kn);

	//ниже три строки работают в inpute, без value НЕ работает
	// istorOld = document.getElementById("display1").value;
	// let istorNew = istorOld + kn;
	// document.getElementById("display1").value = istorNew;

	if(document.getElementById('pervoe').checked) {
		let cifraOld = document.getElementById("display1").value;
		let cifraNew = cifraOld + kn;
		document.getElementById("display1").value = cifraNew;
	} else if(document.getElementById('vtoroe').checked) {
		let cifraOld = document.getElementById("display3").value;
		let cifraNew = cifraOld + kn;
		document.getElementById("display3").value = cifraNew;
	}
}

//кнопка Вставить из памяти, нажать
function funcIzPam() {
	kn = document.getElementById('pam').value;
	if(document.getElementById('pervoe').checked) {
		document.getElementById("display1").value = kn;
	} else if(document.getElementById('vtoroe').checked) {
		document.getElementById("display3").value = kn;
	}
}

//кнопки с арифметическими операторами, нажать
function funcArifmOp(kn) {
	document.getElementById("display2").value = kn;
}

//кнопка Убрать знак справа, нажать
function funcUdZnak() {
	if(document.getElementById('pervoe').checked) {
		document.getElementById("display1").value = document.getElementById("display1").value.slice(0, -1);
	} else if(document.getElementById('vtoroe').checked) {
		document.getElementById("display3").value = document.getElementById("display3").value.slice(0, -1);
	}
}

//кнопка Очистить, нажать
function funcOcistit(){
	document.getElementById("display1").value = "";
	document.getElementById("display2").value = "";
	document.getElementById("display3").value = "";
	document.getElementById("display4").value = "";
	document.getElementById("pam").value = "";
}

//кнопка Вычислить, нажать
function funcRascet(kn) {
	let k1 = parseFloat(document.getElementById('display1').value);
	let k2 = document.getElementById('display2').value
	let k3 = parseFloat(document.getElementById('display3').value);
	if(typeof(k1) == "number" && typeof(k3) == "number"){
		document.getElementById("display4").value = eval(k1 + k2 + k3);
	} else{
		document.getElementById("display4").value = k1;
	}
}

//кнопка Занести результат в память калькулятора, нажать
function funcVpam(kn) {
	document.getElementById("pam").value = document.getElementById("display4").value;
}