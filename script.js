//your JS code here. If required.
document.addEventListener("click",click);


function click(){
	let count=document.getElementById('counter');
	let num=count.innerHTML;
	alert(num);
	num++;
	counter.innerHTML=num;
}