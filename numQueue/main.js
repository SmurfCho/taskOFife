var inp=document.getElementById("inp");
var btn_leftin=document.getElementById("btn-leftin");
var btn_rightin=document.getElementById("btn-rightin");
var btn_leftout=document.getElementById("btn-leftout");
var btn_rightout=document.getElementById("btn-rightout");
var sort=document.getElementById("sort");
var queue=document.getElementById("queue");
var searchbtn=document.getElementById("btn-search");
var searchinp=document.getElementById("search");
btn_leftin.addEventListener("click",a);
btn_rightin.addEventListener("click",a);
btn_leftout.addEventListener("click",a);
btn_rightout.addEventListener("click",a);
searchinp.addEventListener("click",a);
searchbtn.addEventListener("click",a);
//sort.addEventListener("click",a);
var arr=new Array();
function a(e){
	var e = e || window.event;
    var e1=e.srcElement || e.currentTarget;
    if(e1.value==="左侧入"){
    	if(queue.childElementCount>=60){
    		alert("队列元素不能超过60！")
    	}
    	else if(inp.value!=""){
    		var arrs=checkstring();
    		for(var i=arrs.length-1;i>=0;i--){
	    		var inBlock=document.createElement("li");
				inBlock.innerHTML=arrs[i];
				var firstNode=queue.childNodes[0];
				queue.insertBefore(inBlock,firstNode);
				inBlock.addEventListener("click",a);
    		}
			inp.value="";
    	}
	}
	else if(e1.value==="右侧入"){
		if(queue.childElementCount>=60){
    		alert("队列元素不能超过60！")
    	}
		else if(inp.value!=""){
			var arrs=checkstring();
			for(var i=0;i<arrs.length;i++){
	    		var inBlock=document.createElement("li");
				inBlock.innerHTML=arrs[i];
				var firstNode=queue.childNodes[0];
				queue.appendChild(inBlock);
				inBlock.addEventListener("click",a);
    		}
			inp.value="";
		}
	}
	else if (e1.value==="左侧出"){
		queue.removeChild(queue.childNodes[0]);
	}
	else if(e1.value==="右侧出"){
		queue.removeChild(queue.lastChild);
	}else if(e1.value==="搜索"){
		search();
    }else if(e1.value==="请输入要搜索的内容"){
		e1.value="";
    }else if(e1.value==="排序"){
    //		showArray(bubbleSort())
    }else{
		queue.removeChild(e1);
	}
}
function checkstring(){
	var inpReplace = inp.value.replace(/[,，.。；;、\s\n]/g,"|");
	var arrInp=inpReplace.split("|");
	return arrInp;
}
function search(){
	var word=searchinp.value;
	for (i=0;i<queue.childElementCount;i++){
		var queueChild=queue.childNodes[i];
		if(queueChild.innerHTML.indexOf(word)>=0){
			queueChild.style.background="#000";
		}else{
			queueChild.style.background="#f00";
		}
	}
	searchinp.value="";
}
/*function bubbleSort() {
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
}*/
