const API_URL = 'http://localhost:3000/tasks';

async function loadTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    document.getElementById('taskList').innerHTML = tasks.map(t => `
        <div class="list-group-item d-flex justify-content-between align-items-center">
            <span style="${t.completed ? 'text-decoration:line-through' : ''}" onclick="toggleTask('${t._id}')" role="button">${t.name}</span>
            <button class="btn btn-danger btn-sm" onclick="deleteTask('${t._id}')">Usun</button>
        </div>
    `).join('');
}

async function addTask() {
    const name = document.getElementById('taskInput').value;
    if (!name) return;
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
    document.getElementById('taskInput').value = '';
    loadTasks();
}

async function toggleTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'PATCH' });
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
}

loadTasks();