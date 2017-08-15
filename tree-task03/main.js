var pre=document.getElementById("pre-order");
var post=document.getElementById("post-order");
var container=document.getElementById("container");
var searchT=document.getElementById("search");
var searchBtn=document.getElementById("search-btn");
var bool=false;
var treeNodes=[];
var nodeText=[];
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
        var t=treeNodes[i].childNodes[0].innerHTML;
        if(t === searchText){
            treeNodes[i].style.borderColor="#f00";
            nodeBool=true;
        }
    }
    if(!nodeBool){
        alert("未找到相应信息")
    }
    searchT.value="";
    bool=false;
}
