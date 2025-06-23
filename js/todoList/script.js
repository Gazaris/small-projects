function createTaskElement(name) {
  if(typeof(name) != "string")
    return null;

  let newTask = document.createElement('div');
  newTask.classList.add("task");
  newTask.innerHTML = "<span>" + name + "</span>";
  return newTask;
}

function addTask(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements['name'].value;
  console.log('Tried to add a task:', name);

  let newTask = createTaskElement(name);
  document.getElementById("wrapper").appendChild(newTask);
}


