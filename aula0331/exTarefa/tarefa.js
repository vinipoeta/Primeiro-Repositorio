const taskInput = document.querySelector('#task-input');
const taskButton = document.querySelector('#task-button');
const taskList = document.querySelector('#task-list');

taskButton.addEventListener('click', () => {
    taskList.innerHTML +="<li>" + taskInput.value + "</li>" ;

    taskInput.value = '';
    taskInput.focus();
});
