function charCodeAt(str){
	
	for(var i=0;i<str.length;i++){
		var code = str.charCodeAt(i);
		var str1 =String.fromCharCode(code);
		console.log(str1+":"+code);
	}
}

function arr(){
	arr=[1,2,3,4]
	console.log(arr)
}

function decode(){
	var arr=[22909,22909,23398,20064];
	var str="";
	for(var i=0;i<arr.length;i++){
		var strCode=String.fromCharCode(arr[i]);
		str +=strCode;
	}
	console.log(str);
}

function reverse(){
	var str="|a|b|c|";
	var arr=str.split("|");
	    arr=arr.join("|");
	// arr.pop();
	// arr.shift();
	// arr.reverse();
	// arr.join("|");
    // var str="|";
    // for(var i=0;i<arr.length;i++){
    // 	str +=arr[i];
    // 	str +="|";
   //   }
	console.log(arr);
}
reverse(arr);
function findAndReplace(){
	var str ="fuck,fuck,tmd,jk";
	var arr=["tmd","fuck"];
	for(var i=0;i<arr.length;i++){
		var reg=new RegExp(arr[i],"gi");
		str = str.replace(reg,"***");
	}
	    console.log(str);
}
function arr(){
	var str="fuck,kk,wo";
	var str=str.split(",");
	console.log(typeof str);
	    str.join("|");
	console.log(str);
}
function gougu(a,b){
	var a=Math.pow(a,2);
	var b=Math.pow(b,2);
	var sum=a+b;
	var c=Math.sqrt(sum);
	console.log(a+"+"+b+"="+c);
}
function join(){
	var arr=[1,2,3];
	var arr=arr.join("#");
	console.log(arr);
}
function charCodeAt(){
	str="0";
	str=str.charCodeAt(0);
	console.log(str);
}
function reverse(){
	str="|a|b|c|d|";
	var arr=str.split("|");
	arr.reverse();
	arr=arr.join("|");
	console.log(arr);
}

