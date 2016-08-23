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
					document.getElementById("valueSun").innerHTML = msgGroup[0];
					document.getElementById("valueCarbonD").innerHTML = msgGroup[1];
					document.getElementById("valueAir1Degree").innerHTML = msgGroup[2];
					document.getElementById("valueAir1Percent").innerHTML = msgGroup[3];
					document.getElementById("valueAir2Degree").innerHTML = msgGroup[4];
					document.getElementById("valueAir2Percent").innerHTML = msgGroup[5];
					document.getElementById("valueAir3Degree").innerHTML = msgGroup[6];
					document.getElementById("valueAir3Percent").innerHTML = msgGroup[7];
					document.getElementById("valueAir4Degree").innerHTML = msgGroup[8];
					document.getElementById("valueAir4Percent").innerHTML = msgGroup[9];
					document.getElementById("valueSoil1Degree").innerHTML = msgGroup[10];
					document.getElementById("valueSoil2Percent").innerHTML = msgGroup[11];
					document.getElementById("valueSoil1Degree").innerHTML = msgGroup[12];
					document.getElementById("valueSoil2Percent").innerHTML = msgGroup[13];
				}else{
					alert("刷新出错1：");
				}
			}else{
				alert("刷新出错2：" + request.status);
			}
		}
	}
}
