//your JS code here. If required.

function incrementBtn(){  
    Counter=document.getElementById('counter').innerHTML;
	let num=parseInt(Counter);
	alert(num);
	num++;
	document.getElementById('counter').innerHTML=num;
}

