let container = document.querySelector(".container");

const createElement = (tag, nameClass, text = undefined, parent) => {
  let element = document.createElement(tag);
  element.className = nameClass;
  if (text) element.innerHTML = text;
  parent.append(element);
  return element;
};

let userWrap = createElement("div", "user-wrap", undefined, container),
  userTitle = createElement("h2", "user-title", "What is your name?", userWrap),
  inputUserName = createElement("input", "user-name", undefined, userWrap),
  btnSearch = createElement("button", "btn-search", "Search", userWrap);

let createMessagesDom = (tasks) => {
  let toDoList = createElement("div", "todo-list", undefined, container),
    createToDo = createElement("div", "create_todo", undefined, toDoList),
    createTask = createElement("div", "create_task", undefined, toDoList),
    inputTask = createElement("input", "message", undefined, createToDo),
    btnAddTask = createElement("button", "btn_add", "Add", createToDo),
    toDoTasksWrap = createElement("ul", "todo", undefined, createTask);

  createElement("h1", "title-h1", "ToDo List", toDoList);
  createElement("h2", "title-h2", "Tasks:", createTask);

  inputTask.setAttribute("type", "text");
  inputTask.setAttribute("placeholder", "What do you want to do?");

  let displayMessage = "";
  let addUserTaskInDom = (elem) => {
    displayMessage += `
      <li class="todo-item ${elem.done ? "done-task" : ""}" data-id=${elem.id}>
        <p><span>${elem.id}.</span>${elem.task}</p>
        <button class="btn-done ${elem.done ? "hidden" : ""}">done</button>
      </li>
    `;
    toDoTasksWrap.innerHTML = displayMessage;

    let btnCheck = createTask.querySelectorAll(".btn-done");
    btnCheck.forEach((item) => {
      item.addEventListener("click", (e) => {
        let elem = e.target;
        let li = elem.closest("li");
        let liId = li.dataset.id;
        doneUserTask(inputUserName.value, liId);
        li.classList.add("done-task");
        elem.classList.add("hidden");
      });
    });
  };

  tasks.forEach(addUserTaskInDom);

  btnAddTask.addEventListener("click", () => {
    let liNodes = toDoTasksWrap.querySelectorAll(".todo-item");
    let newToDo = {
      task: inputTask.value,
      id: liNodes.length + 1,
      done: false,
    };
    addUserTask(inputUserName.value, newToDo);
    addUserTaskInDom(newToDo, liNodes.length);
  });
};

let doneUserTask = (userName, taskId) => {
  let userTasks = getUserTasks(userName);
  let mapArr = userTasks.map((userTask) => {
    if (userTask.id === parseInt(taskId)) {
      userTask.done = true;
    }
    return userTask;
  });
  localStorage.setItem(userName, JSON.stringify(mapArr));
};

let getUserTasks = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

let addUserTask = (nameUser, task) => {
  let userTasks = getUserTasks(nameUser);
  userTasks.push(task);
  localStorage.setItem(nameUser, JSON.stringify(userTasks));
};

btnSearch.addEventListener(
  "click",
  () => {
    let value = inputUserName.value;
    if (value === "") {
      inputUserName.value = `Guest-${Date.now()}`;
      value = inputUserName.value;
    }
    let tasks = getUserTasks(value);
    if (tasks) {
      createMessagesDom(tasks);
    } else {
      localStorage.setItem(value, JSON.stringify([]));
      createMessagesDom([]);
    }
  },
  { once: true }
);
