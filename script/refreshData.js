// 点击刷新按钮刷新数据

document.getElementById("navIcon").onclick = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "/farm/script/refreshJSON.php");
	request.send();
	request.onreadystatechange  =function(){
		if(request.readyState === 4){
			if(request.status === 200){
				var data = JSON.parse(request.responseText);
				if (data.success) {
					var msgGroup  = data.msg.split(",");
					var id = null;
					for(var i = 0;i <= 13;i++){
						id = getId(i);
						document.getElementById(id).innerHTML = msgGroup[i];
					}
					for(var i = 14;i <= 22;i++){ //此处可按照情况修改为msgGroup.length+1，下面定义的id也可根据每栏列表的项目数而作优化
						if(i>=14 && i<=17){
							id = "valueOther1" + (i-13);
							showStatus(i,id,msgGroup);
						}else if(i>=18 && i<=19){
							id = "valueOther2" + (i-17);
							showStatus(i,id,msgGroup);
						}else if(i>=20 && i<=21){
							id = "valueOther3" + (i-19);
							showStatus(i,id,msgGroup);
						}else{
							id = "valueOther41";
							showStatus(i,id,msgGroup);
						}
					}
				}else{
					alert("刷新出错1：");
				}
			}else{
				alert("刷新出错2：" + request.status);
			}
		}
	}
}

function getId(index){
	switch(index){
		case 0:return "valueSun";break;
		case 1:return "valueCarbonD";break;
		case 2:return "valueAir1Degree";break;
		case 3:return "valueAir1Percent";break;
		case 4:return "valueAir2Degree";break;
		case 5:return "valueAir2Percent";break;
		case 6:return "valueAir3Degree";break;
		case 7:return "valueAir3Percent";break;
		case 8:return "valueAir4Degree";break;
		case 9:return "valueAir4Percent";break;
		case 10:return "valueSoil1Degree";break;
		case 11:return "valueSoil1Percent";break;
		case 12:return "valueSoil2Degree";break;
		case 13:return "valueSoil2Percent";break;
		default:break;
	}
}

function showStatus(index,id,msgGroup){
	if(msgGroup[index] == "w"){
		var thisId = document.getElementById(id);
		thisId.innerHTML = "未知";
		thisId.parentNode.className += " unknown";
	}else if(msgGroup[index] == "g"){
		var thisId = document.getElementById(id);
		thisId.innerHTML = "关闭";
		thisId.parentNode.className += " closed";
	}else{
		var thisId = document.getElementById(id);
		thisId.innerHTML = "全开";
		thisId.parentNode.className += " opened";
	}
}