const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

btn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => {
    li.style.textDecoration =
      li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  });
  list.appendChild(li);
  input.value = '';
});