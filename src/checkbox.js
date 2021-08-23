export const checkCompletion = (status, task) => {
  task.completed = status;
};

export const status = (box, task) => {
 box.checked = task;
};
