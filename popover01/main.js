var widthinp=document.getElementById("widthinp");
var heightinp=document.getElementById("heightinp");
var popover=document.getElementById("popover");
var mask=document.getElementById("mask");
var close=document.getElementById("close");
var submit=document.getElementById("submit");
var cancel=document.getElementById("cancel");
var popup=document.getElementById("popup");
popup.addEventListener("click",show,false);
close.addEventListener("click",hid,false);
submit.addEventListener("click",hid,false);
cancel.addEventListener("click",hid,false);
mask.addEventListener("click",hid,false);
function show(){
	popover.style.height=heightinp.value+"%";
	popover.style.width=widthinp.value+"%";
	popover.style.top=(100-heightinp.value)/2+"%";
	popover.style.left=(100-widthinp.value)/2+"%";
	popover.style.display="block";
	mask.style.display="inline"
}
function hid(){
	popover.style.display="none";
	mask.style.display="none";
}
//实现浮出层的拖动

function css(node,key){
	var dropstyle = document.defaultView.getComputedStyle(node,null).getPropertyValue(key);
	return dropstyle;
}
var dragged;
var draggedTop;
var draggedleft;
/* 可拖动的目标元素会触发事件 */
document.addEventListener("drag", function( event ) {
	draggedTop = css(dragged,"top");
	draggedleft = css(dragged,"left");
}, false);

document.addEventListener("dragstart", function( event ) {
// 保存拖动元素的引用(ref.)
	dragged = event.target;
}, false);

document.addEventListener("dragend", function( event ) {
}, false);

/* 放下目标节点时触发事件 */
document.addEventListener("dragover", function( event ) {
// 阻止默认动作
event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {
}, false);

document.addEventListener("dragleave", function( event ) {

}, false);

document.addEventListener("drop", function( event ) {
// 阻止默认动作（如打开一些元素的链接）
event.preventDefault();
// 移动拖动的元素到所选择的放置目标节点
popover.style.top=draggedTop;
popover.style.left=draggedleft;
}, false);