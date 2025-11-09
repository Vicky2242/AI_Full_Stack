const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");



function loadEventListeners(){

    // dom load event
    document.addEventListener("DOMContentLoaded", getTasks);    

    form.addEventListener("submit", addTask);

    clearBtn.addEventListener("click", clearTask);

    taskList.addEventListener("click", removeTask);

    //filter task event
    filter.addEventListener("keyup", filterTasks);
}

loadEventListeners();

function getTasks(){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
        
        const li = document.createElement("li");
        li.className = "collection-item";

        li.innerText = task;

        const link = document.createElement("a");

        link.className = "delete-item secondary-content test";
        
        link.innerHTML = `<i class="fa fa-remove"></i>`

        li.appendChild(link);

        taskList.appendChild(li);
    })
    
   
}

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

        //store in Ls
        storageTaskInLocalStorage(taskInput.value);

        taskInput.value = "";
    }


}

function storageTaskInLocalStorage(inputValue){
    let tasks;

    console.log(tasks);

    if(localStorage.getItem("tasks") === null){
        tasks = [];
        tasks.push(inputValue);
        console.log("step-1");
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(tasks);
        tasks.push(inputValue);
        console.log(tasks);
        console.log("step-2");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
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

    removeTaskFromLs(e.target.parentElement.parentElement);
 }
}

function removeTaskFromLs(taskElement){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
        if(taskElement.innerText === task){
          tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTask(){
    // taskList.innerHTML = "";
    const listItems = Array.from(taskList.children);

    listItems.forEach(function(element){
        element.remove();
    });

    clearFromLs();
}

function clearFromLs(){
    localStorage.removeItem("tasks");
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.innerText;

        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display ="block"
        }else{
            task.style.display = "none"
        }
    })
}

const arr = ["One", "Two", "Three"];

console.log(arr.indexOf("four"))