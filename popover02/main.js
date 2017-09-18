const memberName = document.getElementById("memberName");
const chineseGrade = document.getElementById("ChineseGrade");
const mathGrade = document.getElementById("mathGrade");
const englishGrade = document.getElementById("EnglishGrade");
const submitBtn = document.getElementById("submitBtn");
const gradeTbody = document.getElementById("gradeTbody");
const sortBtn_c = document.getElementById("sortbtn_c");
const sortBtn_e = document.getElementById("sortbtn_e");
const sortBtn_m = document.getElementById("sortbtn_m");
const sortBtn_t = document.getElementById("sortbtn_t");
var allGrades = new Array();
var i=0;
submitBtn.addEventListener("click",function(){getGrades();showRows(i-1);});
sortBtn_c.addEventListener("click",function(){showSorted(bubbleSort(allGrades,1))});
sortBtn_m.addEventListener("click",function(){showSorted(bubbleSort(allGrades,2))});
sortBtn_e.addEventListener("click",function(){showSorted(bubbleSort(allGrades,3))});
sortBtn_t.addEventListener("click",function(){showSorted(bubbleSort(allGrades,4))});
function getGrades(){//将输入的成绩存入数组
	let mN = memberName.value,
	cG = chineseGrade.value,
	mG = mathGrade.value,
	eG = englishGrade.value;
	if(!((mN  && cG && mG && eG)=== "" || (mN  && cG && mG && eG) === null)){
		allGrades[i] = new Array();
		allGrades[i][0] = mN;
		allGrades[i][1] = parseFloat(cG);
		allGrades[i][2] = parseFloat(mG);
		allGrades[i][3] = parseFloat(eG);
		allGrades[i][4] = parseFloat(cG) + parseFloat(eG) + parseFloat(mG);
		i++;
	}else{
		alert("请填写完整！");
	}
}
function showRows(n){//展示输入的成绩
	const rows = document.createElement("tr");
	let tdCreate = new Array();
	for(let t = 0;t < allGrades[n].length;t++){
		tdCreate[t] = document.createElement("td");
		tdCreate[t].innerHTML = allGrades[n][t];
		rows.appendChild(tdCreate[t]);
	}
	gradeTbody.appendChild(rows);
}
function bubbleSort(arr,number){//冒泡排序
    var len = arr.length;
    for (var s = 0; s < len; s++) {
        for (var j = 0; j < len - 1 - s; j++) {
            if (arr[j][number] > arr[j+1][number]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
function showSorted(arr){//展示排序后的表格
	for(let d = gradeTbody.childNodes.length-1;d > 1;d--){
		gradeTbody.removeChild(gradeTbody.childNodes[d]);
	}
		
	for(let j = 0;j < arr.length;j++){
		showRows(j);
	}
}