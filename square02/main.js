var table = document.getElementById("table");
var orderinp = document.getElementById("orderinp");
var orderbtn = document.getElementById("orderbtn");
orderbtn.addEventListener("click",order);
var rows = new Array();
var cells = new Array();
var face = 0;
var x = 300;//x坐标
var y = -250;//y坐标
var angle = 0;//旋转角度
var img = document.createElement("img");
img.setAttribute("src","icons/square.png");
printTab();
function printTab(){
	for(var i = 0;i < 11;i++){
		rows[i] = document.createElement("tr");
		for(var j = 0;j < 11;j++){
			cells[j] = document.createElement("td");
			rows[i].appendChild(cells[j]);
			if(i === 0 && j > 0){
				cells[j].innerHTML = j;
				cells[j].setAttribute("class","border_none");
			}else if(j === 0 && i > 0){
				cells[j].innerHTML = i;
				cells[j].setAttribute("class","border_none");
			}else if(i === 0 && j ===0){
				cells[j].setAttribute("class","border_none");
			}
		}
		table.appendChild(rows[i]);
	}
	current = table;
	current.appendChild(img);
}
function order(){
	var order_value = orderinp.value;
	switch(order_value){
		case "go":
		go();
		break;
		case "lef":
		tunLef();
		break;
		case "rig":
		tunRig();
		break;
		case "bac":
		tunBac();
		break;
		case "nlef":
		nlef();
		break;
		case "nrig":
		nrig();
		break;
		case "ntop":
		ntop();
		break;
		case "nbot":
		nbot();
		break;
		case "mlef":
		angle = -90;
		nlef();
		break;
		case "mrig":
		angle = 90;
		nrig();
		break;
		case "mtop":
		angle = 0;
		ntop();
		break;
		case "mbot":
		angle = 180;
		nbot();
		break;
	}
	img.style.transform = "translateX(" + x + "px) translateY(" + y + "px) rotate(" + angle +"deg)";
}
function go(){
	if(y > -500 && (angle == 0 || Math.abs(angle) == 360)){
		y -=50;
	}else if(x < 500 && (angle == 90 || angle == -270)){
		x +=50;
	}else if(x > 50 && (angle == -90 ||angle ==270)){
		x -=50;
	}else if(y <-50 && Math.abs(angle) == 180){
		y += 50;
	}
}
function tunLef(){
	angle -= 90;
	if(Math.abs(angle) > 360){
		angle +=360;
	}
}
function tunRig(){
	angle += 90;
	if(Math.abs(angle) > 360){
		angle -=360;
	}
}
function tunBac(){
	angle += 180;
	if(Math.abs(angle) > 360){
		angle -=360;
	}
}
function nlef(){
	if(x > 50){
		x -= 50;
	}
}
function nrig(){
	if(x < 500){
		x += 50;
	}
}
function ntop(){
	if(y > -500){
		y -= 50;
	}
}
function nbot(){
	if(y < -50){
		y +=50;
	}
}
