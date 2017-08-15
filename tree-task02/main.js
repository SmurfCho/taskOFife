var pre=document.getElementById("pre-order");
var post=document.getElementById("post-order");
var container=document.getElementById("container");
var searchT=document.getElementById("search");
var searchBtn=document.getElementById("search-btn");
var deleteN=document.getElementById("delete");
var add=document.getElementById("add");
var addBtn=document.getElementById("add-btn");
var bool=false;
var cBool=false;
var treeNodes=[];
var nodeText=[];
a();
searchBtn.addEventListener("click",function(){
    if(!bool){
        bool=true;
        init();
        search();
    }
},false);
pre.addEventListener("click",function(){
    if(!bool){
        bool=true;
        init();
        preOrder(container);
        showTree();
    }
},false);
post.addEventListener("click",function(){
        if(!bool){
        bool=true;
        init();
        postOrder(container);
        showTree();
    }
},false);
deleteN.addEventListener("click",deleteNodes);
addBtn.addEventListener("click",addNodes);
//初始化
function init(){
    for(var i=0;i<treeNodes.length;i++){
            treeNodes[i].style.borderColor="#000";
    }
    treeNodes=[];
}
//前序遍历
function preOrder(node){
    if(!(node == null)){
        treeNodes.push(node);
        for(var i=0;i<node.childElementCount;i++){
            preOrder(node.children[i]);
        }
    }
}

//后序遍历
function postOrder(node){
    if(!(node == null)){
        for(var i=0;i<node.childElementCount;i++){
            postOrder(node.children[i]);
        }
        treeNodes.push(node);
    }
}
function showTree(){
	var i=0;
	var loop=setInterval(function (){
		if(i<treeNodes.length&&i<1){
		treeNodes[i].style.borderColor="#f00";
		}else if(i<treeNodes.length&&i>0){
		treeNodes[i-1].style.borderColor="#000";
		treeNodes[i].style.borderColor="#f00";
		}else{
		treeNodes[i-1].style.borderColor="#000";
		clearInterval(loop);
        bool=false;
		}
		i++;
	},500)
}
function search(){
    var searchText=searchT.value;
    preOrder(container);
    var nodeBool=false;
    /*for(var i=0;i<treeNodes.length;i++){
        nodeText[i]=treeNodes[i].childNodes[0].innerHTML;
    }
    var n=nodeText.indexOf(searchText);
    treeNodes[n].style.borderColor="#f00";*/
    for(var i=0;i<treeNodes.length;i++){
        var t=treeNodes[i].childNodes[0].innerHTML||treeNodes[i].childNodes[0].textContent;
        if(searchText == ""){
        	alert("请输入搜索内容")
        }else{
	        var n=t.indexOf(searchText);
	        if(n>=0){
	        treeNodes[i].style.borderColor="#f00";
	        nodeBool=true;
    		}
   		}
    }
    if(!nodeBool){
        alert("未找到相应信息")
    }
    searchT.value="";
    bool=false;
}
function a(){
	preOrder(container);
	for(var i=0;i<treeNodes.length;i++){
        treeNodes[i].addEventListener("click",paint,false);
    }
}
function paint(e){
	e = e || window.event;
    var e1=e.srcElement || e.currentTarget;
    if(!cBool&&e1.nodeName==="DIV"||e1.nodeName==="p"&&!cBool){
    	cBool=true;
    	e1.style.borderColor="#f00";
    }else if(cBool&&e1.nodeName==="DIV"||e1.nodeName==="p"&&cBool){
    	cBool=false;
    	e1.style.borderColor="#000";
    }
}
function deleteNodes(){
	preOrder(container);
	for(var i=0;i<treeNodes.length;i++){
		if(treeNodes[i].style.borderColor === "rgb(255, 0, 0)"){
			treeNodes[i].parentNode.removeChild(treeNodes[i]);
		}
	}
}
function addNodes(){
	treeNodes=[];
	preOrder(container);
	for(var i=0;i<treeNodes.length;i++){
		if(treeNodes[i].style.borderColor === "rgb(255, 0, 0)"){
			var thisChild=document.createElement("div");
			thisChild.innerHTML=add.value;
			treeNodes[i].appendChild(thisChild);
			thisChild.addEventListener("click",paint,false);
			thisChild.style.cssText="height:80%;flex: 1 2 auto;border: 3px solid #000;display: flex;display: -webkit-flex;flex-flow: row wrap;justify-content: space-around;align-items: center;align-content: stretch;box-sizing: border-box;margin: 10px;cursor: pointer;"
			treeNodes[i].style.borderColor="#000";
		}
	}
	add.value="";
}