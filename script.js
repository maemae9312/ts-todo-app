"use strict";
document.getElementById('add-task').addEventListener('click', function () {
    const newTaskInput = document.getElementById('new-task');
    let newTask = newTaskInput.value;
    if (newTask.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newTask;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);
        document.getElementById('tasks').appendChild(listItem);
        newTaskInput.value = '';
    }
});
