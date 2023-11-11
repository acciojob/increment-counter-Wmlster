//your JS code here. If required.
document.addEventListener("click",click); 

let Counter=0;

function click(){
    Counter=document.getElementById('counter').innerHTML;
	alert(Counter);
	Counter++;
	document.getElementById('counter').innerHTML=Counter;
}