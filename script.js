function add(){
var student = document.getElementById("std").value;
var newtag = document.createElement("li");
newtag.innerHTML = student;
document.getElementById("ipt").appendChild(newtag);
}