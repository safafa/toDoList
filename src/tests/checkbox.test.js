import { JSDOM } from 'jsdom';
import { checkCompletion, status } from '../checkbox.js';

const dom = new JSDOM();
global.document = dom.window.document;

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

describe('checkbox completed test', () => {
  it('Mark test as completed if box is checked', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = true;
    checkCompletion(checkbox.checked, tasks[0]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    expect(JSON.parse(localStorage.getItem('tasks'))[0].completed).toBe(true);
  });
  it('Mark test as completed if box is checked', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    tasks[0].completed = true;
    status(checkbox, tasks[0]);
    expect(checkbox.checked).toBe(true);
  });
});