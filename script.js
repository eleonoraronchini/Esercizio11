Button = document.getElementById("addtaskButton")
Button.addEventListener("click", function () {
    const taskInput = document.getElementById ("taskInput");
    const taskValue = taskInput.value;
    if (taskValue) {
        const newTask = document.createElement("li");
        newTask.textContent = taskValue;
    }
})

