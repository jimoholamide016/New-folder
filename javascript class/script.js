let taskCount = 0;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskTime = document.getElementById("taskTime").value;
    const taskText = taskInput.value.trim();
     


    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = `${taskText} (Due: ${taskTime})`;

    
    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");

    });

    
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
    const now = new Date();

const [hours, minutes] = taskTime.split(":");

const dueTime = new Date();
dueTime.setHours(hours);
dueTime.setMinutes(minutes);
dueTime.setSeconds(0);

// If the selected time has already passed today,
// schedule it for tomorrow.
if (dueTime < now) {
    dueTime.setDate(dueTime.getDate() + 1);
}

const timeRemaining = dueTime - now;

setTimeout(() => {
    alert(`Reminder: ${taskText} is due now!`);
}, timeRemaining);
}

function updateTaskCount() {
    document.getElementById("taskCount").textContent = taskCount;
}