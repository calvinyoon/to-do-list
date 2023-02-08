// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");


// Event Listener for Add Button

function createListElement() {
	let task = document.createElement("div");
	task.classList.add("task");
	let li = document.createElement("li");
	li.innerText = inputTask.value;
	task.appendChild(li);
	taskContainer.appendChild(task);
	inputTask.value = "";
	addCheckButton(task);
	addDeleteButton(task);

}

function addCheckButton(task) {
  //function here has argument because each output is unique
	const checkButton = document.createElement("button");
	checkButton.innerHTML = "<i class='fa-solid fa-check'></i>";
	checkButton.classList.add("checkTask");
	task.appendChild(checkButton);   
  checkButton.addEventListener("click", function() {
      checkButton.parentElement.classList.toggle("done");
  });
}

function addDeleteButton(task) {
  //function here has argument because each output is unique
	const deleteButton = document.createElement("button");
	deleteButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
	deleteButton.classList.add("deleteTask");
	task.appendChild(deleteButton);
  deleteButton.addEventListener("click", function() {
    deleteButton.parentElement.remove();
  });
}


function addListAfterClick() {
	if(inputTask.value !== "") {
		createListElement(); 
		} else {
		alert("Please Enter a Task");
	}
}

function addListAfterKeypress(event) {
  if(inputTask.value !== "" && event.key === "Enter") {
    createListElement();
  }
}


addTask.addEventListener("click", addListAfterClick);
inputTask.addEventListener("keypress", addListAfterKeypress);

