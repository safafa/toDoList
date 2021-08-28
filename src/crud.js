const updateIndex = (tasks) => {
  tasks.forEach((element) => {
    element.index = tasks.indexOf(element) + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const create = (description) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = { description, index: tasks.length + 1, completed: false };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const remove = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.splice(task.index - 1, 1);
  updateIndex(tasks);
};

const clearCompleted = (tasks) => {
  tasks = tasks.filter((task) => !task.completed);
  updateIndex(tasks);
};

export const edit = (task, description) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks[task.index - 1].description = description;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { create, remove, clearCompleted };