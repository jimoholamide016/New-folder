let taskCount = 0;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Mark as completed
    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    // Delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        taskCount--;
        updateTaskCount();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskCount++;
    updateTaskCount();

    taskInput.value = "";
}

function updateTaskCount() {
    document.getElementById("taskCount").textContent = taskCount;
}