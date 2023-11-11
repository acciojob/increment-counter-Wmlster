//your JS code here. If required.
document.addEventListener("click",click); 
 

function click(){
	let num=document.getElementById('counter');
	let counter=num.innerHTML;
	alert(counter);
	counter++;
	counter.innerHTML=counter;
}