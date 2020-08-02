var uscore=0;
var cscore=0;
document.getElementById("humanscore").innerHTML = uscore;
document.getElementById("computercore").innerHTML = cscore;
function moverock(){
	var temp=Math.floor(Math.random() * 10)%3;
	if(temp==2){
		uscore=uscore+1;
		document.getElementById("result").innerHTML = "You Win!";
	}
	else if(temp==1){
		cscore=cscore+1;
		document.getElementById("result").innerHTML = "You Lose!";
	}
	else{

		document.getElementById("result").innerHTML = "It's a Tie!";
	}
	// alert(temp);
	document.getElementById("humanscore").innerHTML = uscore;
	document.getElementById("computercore").innerHTML = cscore;
}
function movepaper(){
	var temp=Math.floor(Math.random() * 10)%3;
	if(temp==0){
		uscore=uscore+1;
		document.getElementById("result").innerHTML = "You Win!";
	}
	else if(temp==2){
		cscore=cscore+1;
		document.getElementById("result").innerHTML = "You Lose!";
	}
	else{

		document.getElementById("result").innerHTML = "It's a Tie!";
	}
	// alert("paper");
	document.getElementById("humanscore").innerHTML = uscore;
	document.getElementById("computercore").innerHTML = cscore;
}
function movescissor(){
	var temp=Math.floor(Math.random() * 10)%3;
	if(temp==1){
		uscore=uscore+1;
		document.getElementById("result").innerHTML = "You Win!";
	}
	else if(temp==0){
		cscore=cscore+1;
		document.getElementById("result").innerHTML = "You Lose!";
	}
	else{

		document.getElementById("result").innerHTML = "It's a Tie!";
	}
	// alert("scissor");
	document.getElementById("humanscore").innerHTML = uscore;
	document.getElementById("computercore").innerHTML = cscore;
}

function resetscore(){
	uscore=0;
	cscore=0;
	// alert("resets");
	document.getElementById("humanscore").innerHTML = uscore;
	document.getElementById("computercore").innerHTML = cscore;
}
