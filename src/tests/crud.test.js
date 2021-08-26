import {
  clearCompleted, create, edit, remove,
} from '../crud.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

beforeEach(() => {
  localStorage.setItem('tasks', JSON.stringify([
    {
      index: 1,
      description: 'CapstoneProject',
      completed: false,
    },
    {
      index: 2,
      description: 'Todo Project',
      completed: false,
    },
    {
      index: 3,
      description: 'RestaurauntProject',
      completed: false,
    },
  ]));
});

describe('Test create methode', () => {
  it('Add new task to localStorage', () => {
    const description = 'test task';
    create(description);
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks[3].description).toBe('test task');
  });
  it('New task index should be array length', () => {
    const description = 'test task';
    create(description);
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks[3].index).toBe(4);
  });
});

describe('Test remove methode', () => {
  it('removes task from localStorage', () => {
    remove({
      index: 1,
      description: 'CapstoneProject',
      completed: false,
    });
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks.length).toBe(2);
  });
  it('After remove tasks updates', () => {
    remove({
      index: 1,
      description: 'CapstoneProject',
      completed: false,
    });
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks[0].index).toBe(1);
  });
});

describe('clear All completed test', () => {
  it('remove all completed', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[0].completed = true;
    tasks[2].completed = true;
    clearCompleted(tasks);
    expect(JSON.parse(localStorage.getItem('tasks')).length).toBe(1);
  });
  it('remove all completed', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[0].completed = true;
    tasks[2].completed = true;
    clearCompleted(tasks);
    expect(JSON.parse(localStorage.getItem('tasks'))[0].index).toBe(1);
  });
});

describe('edit function test', () => {
  it('edit task on localStorage', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    edit(tasks[0], 'edit test');
    expect(JSON.parse(localStorage.getItem('tasks'))[0].description).toBe('edit test');
  });
});