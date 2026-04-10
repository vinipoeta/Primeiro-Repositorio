const taskInput = document.querySelector('#task-input');
const taskButton = document.querySelector('#task-button');
const taskList = document.querySelector('#task-list');

const tasks = [];

function lista() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        taskList.innerHTML += "<li>" + taskInput.value + "</li>";
    }
}

taskButton.addEventListener('click', () => {
    tasks.push(taskInput.value);

    taskInput.value = '';
    taskInput.focus();

    lista();
});