// Select elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Bruhh enter something 😭");
    return;
  }

  // Create li
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent marking complete
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
}
