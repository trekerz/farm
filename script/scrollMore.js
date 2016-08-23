var scroll = new auiScroll({
	listen:true, //是否监听滚动高度，开启后将实时返回滚动高度
	distance:0 //判断到达底部的距离，isToBottom为true
},function(ret){
	console.log(ret.isToBottom);
	if(ret.isToBottom == true){
	    var allContent = document.getElementsByClassName("allContent")[0];
   		var cloneContent = allContent.cloneNode(true); //克隆节点
   		document.body.appendChild(cloneContent);
	}
});