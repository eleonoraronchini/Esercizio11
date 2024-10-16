const TaskBtn = document.getElementById("new-task-button");
const input = document.getElementById("new-task");
const ul = document.getElementById("taskList");

console.log (TaskBtn);

TaskBtn.onclick = function () {
   if (input.value.length > 0) {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = ""; /*per svuotare la barra dell'Input dopo aver premuto "agggiungi Task" */
   
   const deleteButton = document.createElement("button");
   deleteButton.textContent = "Done";
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click",function(){
        li.classList.add("style");
     }); 
};
return;
};
const container = document.getElementsByClassName("container");
container.style.textAlign = "center";