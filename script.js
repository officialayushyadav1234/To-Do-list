const inputBox = document.getElementById("input-box");
const text = document.getElementById("text");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        text.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    inputBox.value = '';
    saveData();
}

text.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
}, false );

function saveData(){
localStorage.setItem("data", text.innerHTML);
}

function showTask(){
    text.innerHTML = localStorage.getItem("data");
}
showTask();