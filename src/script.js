document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
document.getElementById('filter').addEventListener('change', filterTasks);

let tasks = []; // Store tasks in an array
