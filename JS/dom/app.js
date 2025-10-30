const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


function loadEventListeners(){
    form.addEventListener("submit", addTask);

    clearBtn.addEventListener("click", clearTask);

    taskList.addEventListener("click", removeTask);
}

loadEventListeners();

function addTask(e){
    e.preventDefault();

    if(taskInput.value === ""){
        alert("please fill the field");
    }else{

        const li = document.createElement("li");
        li.className = "collection-item";

        li.innerText = taskInput.value;

        const link = document.createElement("a");

        link.className = "delete-item secondary-content test";
        
        link.innerHTML = `<i class="fa fa-remove"></i>`

        li.appendChild(link);

        taskList.appendChild(li);

        taskInput.value = "";
    }


}

function removeTask(e){
//  if(e.target.parentElement.className === "delete-item secondary-content"){
//     if(confirm("Are you sure")){
//         console.log(e.target.parentElement.parentElement.remove);
//     }
//  }

    // console.log(e.target.parentElement.classList.contain("delete-item"));

    if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm("Are you sure")){
        e.target.parentElement.parentElement.remove();
    }

    
 }
}

function clearTask(){
    // taskList.innerHTML = "";
    const listItems = Array.from(taskList.children);

    listItems.forEach(function(element){
        element.remove();
    })
}

