export const checkCompletion = (status, task) => {
  if (status) {
    task.completed = true;
  } else {
    task.completed = false;
  }
};

export const status = (box, task) => {
  if (task) {
    box.checked = true;
  } else {
    box.checked = false;
  }
};
