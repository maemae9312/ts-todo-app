document.getElementById('add-task').addEventListener('click',function() {
    let newTask = document.getElementById('new-task').value;
    if (newTask.trim() !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = newTask;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        document.getElementById('tasks').appendChild(listItem);

        document.getElementById('new-task').value = '';
    }
});