//your JS code here. If required.
document.addEventListener("click",click); 
 

function click(){
	let Counter=document.getElementById('counter').innerHTML;
	alert(Counter);
	Counter++;
	document.getElementById('counter').innerHTML=Counter;
}