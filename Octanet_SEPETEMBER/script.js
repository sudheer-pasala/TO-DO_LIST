
const inputBox = document.getElementById("text");
const listContainer= document.getElementById("list-container");
function addTask(){
    if(text.value===''){
        alert("you must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = text.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML ="delete";
        li.appendChild(span);
    }
    text.value=" ";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showlist(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist();