var vo = {};
// 获取obj的属性
vo.getStyle=function(obj,attr){
	var oStyle=0;
    if(window.getComputedStyle){
	oStyle=getComputedStyle(obj);
    }
    else{
	oStyle=obj.currentStyle;
    }
    return oStyle[attar];
} ;
// 运动函数
vo.startMove=function(obj,oAttars,fn){
	clearInterval(obj.timer);
	var flag = true;
	obj.timer=setInterval(function(){
		for(var attar in oAttars){
			var current = parseInt(getStyle(obj,attar));
			if (attar == "opacity") {
				// 0.3 ==> 0
				current = parseFloat(getStyle(obj, attar));
				current *= 100;
				current = Math.round(current);
			}
			if(attar=="scrollTop"){
	    	    current=obj[attar];
	        }
			var speed = (oAttars[attar] - current) / 8;
			speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
			if (current != oAttars[attar]) {
				// 定时器的清除，
				// 必须是在所有动画都完成之后才执行
				
				// 有一个没有执行完，就将标记设置为false
				flag = false;
				
			}
			
			obj.style[attar] = current + speed + "px";
			if (attar == "opacity") {
				obj.style.opacity = (current + speed) / 100;
				obj.style.filter = "alpha(opacity="+current + speed+")";
			}
			else if(attar=="scrollTop"){
				obj[attar]=current+speed;
			}
		}
		if(flag==true){
			clearInterval(obj.timer);
			fn&&fn()
		}
	},50)
};
vo.addCookie=function(name, val, day){
	var oDate = new Date();

    oDate.setDate(oDate.getDate() + day);
    
    document.cookie = ""+name+"="+val+";expires=" + oDate;
};
vo.getCookie=function(name){
	// 得到cookie
	// username=老马; password=123456
	var str = document.cookie;

	// 按照 ; 分割
	var arr = str.split("; ");
	// username=老马
	// password=123456

	for (var i = 0; i < arr.length; i++)
	{
		var arr1 = arr[i].split("=");
		
		if (arr1[0] == name)
		{
			return arr1[1];
		}
	}

	// 如果一个都找不到，就返回 "";
	return "";
};
vo.removeCookie=function(name){
	addCookie(name, 1, -1);
}
vo.maopao=function(){
	var arr=[];
	for(var i=0;i<arguments.length;i++){
		arr.push(arguments[i])
	}
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1;j++){
			if(arr[j]>arr[j+1]){

				var t=arr[j];
				    arr[j]=arr[j+1];
				    arr[j+1]=t;

			}
		}
	}
	console.log(arr)
};
vo.getDate=function(){
	var currentDay=new Date();
	var getHour=currentDay.getHours();
	var getMinute=currentDay.getMinutes();
	var getSecond=currentDay.getSeconds();
	var str=getHour+":"+getMinute+":"+getSecond;
	return console.log(str);
};
vo.outputDate=function(obj){
	var years=obj.getFullYear();
	var months=obj.getMonth()+1;
	var days=obj.getDate();
	var weeks=obj.getDay();
	var hours=obj.getHours();
	var minutes=obj.getMinutes();
	var seconds=obj.getSeconds();
	var milliseconds=obj.getMilliseconds();

	var arr=["日","一","二","三","四","五","六"];
	var str=years+"年"+months+"月"+days+"日"+"星期"+arr[weeks]+" "+hours+"时"+minutes+"分"+seconds+"秒"+"."+milliseconds;
    return str;

};
vo.random=function(min,max){
	return min+parseInt(Math.random()*(max-min+1));
};

