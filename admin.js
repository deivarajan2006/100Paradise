let password="admin123";

function login(){

let p=document.getElementById("pass").value;

if(p==password){

document.getElementById("panel").style.display="block";

}else{

alert("Wrong password");

}

}

function add(){

alert("Product added (demo)");

}
