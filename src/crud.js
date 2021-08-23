export const create = (description) => {
  const tasks = JSON.parse(window.localStorage.getItem('tasks'));
  const task = { description, index: tasks.length + 1, completed: false };
  tasks.push(task);
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const remove = (task) => {
  const tasks = JSON.parse(window.localStorage.getItem('tasks'));
  tasks.splice(task.index - 1, 1);
  tasks.forEach((element) => {
    element.index = tasks.indexOf(element) + 1;
  });
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const clearCompleted = (tasks) => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((element) => {
    element.index = tasks.indexOf(element) + 1;
  });
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
};

export const edit = (task, description) => {
  const tasks = JSON.parse(window.localStorage.getItem('tasks'));
  tasks[task.index - 1].description = description;
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
};