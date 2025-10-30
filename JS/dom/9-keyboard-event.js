const taskInput = document.querySelector("#task");

// taskInput.addEventListener("Keydown", runEvent);

// taskInput.addEventListener("Keypress", runEvent);

// taskInput.addEventListener("input", runEvent);

// taskInput.addEventListener("focus", runEvent);

// taskInput.addEventListener("blur", runEvent);

taskInput.addEventListener("cut", runEvent);

function runEvent(event){
    console.log(event.type);
    console.log(event.target.value);
}