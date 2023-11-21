//your JS code here. If required.
let box = document.getElementById("fname");
box.addEventListener("change" , () =>{
	let ans = box.value.toUpperCase();
	console.log(ans);
})