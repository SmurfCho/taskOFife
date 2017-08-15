var inp=document.getElementById("inp");
var btn_leftin=document.getElementById("btn-leftin");
var btn_rightin=document.getElementById("btn-rightin");
var btn_leftout=document.getElementById("btn-leftout");
var btn_rightout=document.getElementById("btn-rightout");
var queue=document.getElementById("queue");
btn_leftin.addEventListener("click",function(){
    	if(inp.value!=""){
		var inBlock=document.createElement("li");
		inBlock.innerHTML=inp.value;
		var firstNode=queue.childNodes[0];
		queue.insertBefore(inBlock,firstNode);
		inBlock.addEventListener("click",a);
		inp.value="";
	}
});
btn_rightin.addEventListener("click",function(){		
		if(inp.value!=""){
		var inBlock=document.createElement("li");
		inBlock.innerHTML=inp.value;
		queue.appendChild(inBlock);
		inBlock.addEventListener("click",a);
		inp.value="";
		}
});
btn_leftout.addEventListener("click",function(){
	queue.removeChild(queue.childNodes[0]);
});
btn_rightout.addEventListener("click",function(){
	queue.removeChild(queue.lastChild);
});
function a(e){
	var e = e || window.event;
    var e1=e.srcElement || e.currentTarget;
   
		queue.removeChild(e1);
}