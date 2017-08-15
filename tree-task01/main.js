var pre=document.getElementById("pre-order");
var inO=document.getElementById("in-order");
var post=document.getElementById("post-order");
pre.addEventListener("click",function(){preOrder(container);showTree()},false);
inO.addEventListener("click",function(){inOrder(container);showTree()},false);
post.addEventListener("click",function(){postOrder(container);showTree()},false);
var  container=document.getElementById("container");
//前序遍历
var treeNodes=[];
function preOrder(node){
    if(!(node == null)){
        treeNodes.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}
//中序遍历
function inOrder(node){
    if(!(node == null)){
        inOrder(node.firstElementChild);//先访问左子树
        treeNodes.push(node);//再访问根节点
        inOrder(node.lastElementChild);//最后访问右子树
    }
}
//后序遍历
function postOrder(node){
    if(!(node == null)){
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
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
		}
		i++;
	},500)
}