//references to important HTML elements
const tasksInput = document.getElementById("tasksInput");
const addTask = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const deleteAll = document.getElementById("deleteAll");
const message = document.getElementById("message");

// Get references to important HTML elements
addTask.addEventListener("click", displayTasks);

// Function to display add tasks to the list
function displayTasks() {
  // Check if input is empty or contains only spaces
  if (tasksInput.value.trim() === "") {
    alert("Please enter a task!");
  } else {
    // Create a new <li> element for the task
    const li = document.createElement("li");

    // Add Bootstrap classes for styling
    li.className = "d-flex mb-3 justify-content-between align-items-center";

     // Add inner content, task text + delete button   
    li.innerHTML = `
    <h6 class="mb-0">${tasksInput.value}</h6>
    <button class="btn btn-danger btn-sm delete-btn">Delete</button>`;

    // Append the new <li> to the task list
    taskList.appendChild(li);
    
    // Clear the input field after adding the task
    tasksInput.value = "";
    li.querySelector(".delete-btn").addEventListener("click", () => {
    // Remove the specific task when 'Delete' is clicked
        li.remove();

    // Update the message display
        showMessage();
    });

   // Update message display after adding a new task
    showMessage();
  }
}
// pressing "Enter" key to add task instead of clicking button
tasksInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    displayTasks();
  }
});
// add event listener for "Delete All" button
deleteAll.addEventListener("click", clearAll);
// Function to delete all tasks at once
function clearAll() {
    // Confirm before deleting everything
  if (confirm("Are you sure you want to delete all tasks?")) {
    taskList.innerHTML = "";
  }
 // Update the message display after    clearing all
  showMessage()
}
// Function to show or hide the "no tasks" message
function showMessage() {
    // Show message when list is empty
  if (taskList.children.length === 0) {
    message.classList.remove("d-none");
  }
  // Hide message when there are tasks 
  else {
    message.classList.add("d-none");
  }
}

// Update the message display 
showMessage();
