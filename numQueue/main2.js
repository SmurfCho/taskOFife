var inp=document.getElementById("inp");
var btn_leftin=document.getElementById("btn-leftin");
var btn_rightin=document.getElementById("btn-rightin");
var btn_leftout=document.getElementById("btn-leftout");
var btn_rightout=document.getElementById("btn-rightout");
var sort=document.getElementById("sort");
var queue=document.getElementById("queue");
btn_leftin.addEventListener("click",a);
btn_rightin.addEventListener("click",a);
btn_leftout.addEventListener("click",a);
btn_rightout.addEventListener("click",a);
sort.addEventListener("click",a);
var arr=new Array();
function a(e){
	var e = e || window.event;
    var e1=e.srcElement || e.currentTarget;
    if(e1.value==="左侧入"){
    	if(queue.childElementCount>=60){
    		alert("队列元素不能超过60！")
    	}
    	else if(inp.value!=""&&inp.value>=10&&inp.value<=100&&queue.childElementCount<60){
    		var inBlock=document.createElement("li");
			inBlock.innerHTML=inp.value;
			inBlock.style.height=inp.value+'px';
			inBlock.style.marginTop=100-inp.value+'px';
			var firstNode=queue.childNodes[0];
			queue.insertBefore(inBlock,firstNode);
			inBlock.addEventListener("click",a);
			inp.value="";
    	}else{
    		inp.value="";
    		alert("请输入10~100间的数字");
    	}
	}
	else if(e1.value==="右侧入"){
		if(queue.childElementCount>=60){
    		alert("队列元素不能超过60！")
    	}
		else if(inp.value!=""&&inp.value>=10&&inp.value<=100&&queue.childElementCount<60){
		var inBlock=document.createElement("li");
		inBlock.innerHTML=inp.value;
		inBlock.style.height=inp.value+'px';
		inBlock.style.marginTop=100-inp.value+'px';
		queue.appendChild(inBlock);
		inBlock.addEventListener("click",a);
		inp.value="";
		}else{
			inp.value="";
			alert("请输入10~100间的数字");
		}
	}
	else if (e1.value==="左侧出"){
		queue.removeChild(queue.childNodes[0]);
	}
	else if(e1.value==="右侧出"){
		queue.removeChild(queue.lastChild);
	}else if(e1.value==="排序"){
    		showArray(bubbleSort())
    }else{
		queue.removeChild(e1);
	}
}
function bubbleSort() {
	arr.splice(0,arr.length);
	for(i=0;i<queue.childElementCount;i++){
		arr[i]=queue.childNodes[i].innerHTML;
	}
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
function showArray(array){
	var sortQueue=document.createElement("ul");
	var container=document.getElementById("container");
	container.appendChild(sortQueue);
	for(i=0;i<array.length;i++){
		var inBlock=document.createElement("li");
		inBlock.innerHTML=array[i];
		inBlock.style.height=array[i]+'px';
		inBlock.style.marginTop=100-array[i]+'px';
		sortQueue.appendChild(inBlock);
	}
}