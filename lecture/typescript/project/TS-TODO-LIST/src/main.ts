import './style.css';

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}
enum FilterStatus {
  All = 'all',
  Completed = 'completed',
  Active = 'uncompleted',
}

// type FilterType = typeof FilterStatus[keyof typeof FilterStatus]
type FilterType = `${FilterStatus}`;

class TodoApp {
  todoList: Todo[];
  filterStatus: FilterType;
  /**
   * @constructs TodoApp
   */
  constructor() {
    this.todoList = [];
    this.filterStatus = 'all';
    this.initEvent();
  }

  initEvent() {
    const inputEl = document.querySelector('#todo-input');
    const controlBtns = document.querySelectorAll('.todo-control > button');
    controlBtns.forEach((btn) => {
      if (!(btn as HTMLButtonElement).innerText) {
        return;
      }
      const text = (btn as HTMLButtonElement).innerText as FilterType;
      btn.addEventListener('click', (event: MouseEventInit) => {
        this.filterStatus = text;

        this.toggleFilterStatus(event);
        this.render();
      });
    });
    inputEl?.addEventListener('keydown', this.addTodo);
  }

  toggleFilterStatus(event: MouseEventInit) {
    const controlBtns = document.querySelectorAll('.todo-control > button');
    controlBtns.forEach((btn) => btn.classList.remove('active'));

    const targetElement = (event as MouseEvent).target as HTMLButtonElement;

    if (targetElement) {
      targetElement.classList.add('active');
    }
  }

  /**
   * 할일을 추가할 수 있다.
   * @param {string} text
   */
  addTodo = (event: KeyboardEventInit) => {
    if (event.key !== 'Enter') {
      return;
    }

    const target = <HTMLInputElement>(event as KeyboardEvent).target;
    if (!target.value) {
      return;
    }

    const newTodo = {
      id: this.todoList.length + 1,
      content: target.value,
      isDone: false,
    };
    this.todoList.push(newTodo);

    target.value = '';

    this.render();
  };

  /**
   *모든 할 일을 조회할 수 있다.
   *
   * @returns {Todo[]}전체할일
   */
  getTodoList() {
    return this.todoList;
  }

  /**
   * 모든 할 일을 필터링하여 조회할 수 있다.
   *
   * @param {string} text
   * @returns {Todo[]} 필터링된 할일
   */
  getTodoListByFilter(filterType: FilterType) {
    console.log(filterType);
    if (filterType === FilterStatus.All) {
      return this.todoList;
    }
    if (filterType === FilterStatus.Completed) {
      return this.todoList.filter((todo) => todo.isDone);
    }
    if (filterType === FilterStatus.Active) {
      return this.todoList.filter((todo) => !todo.isDone);
    }
    return this.todoList;
  }

  /**
   * 할일의 내용과 상태를 수정할 수 있다.
   *
   * @param {Object}todo - 수정될 할 일
   * @param {string}[todo.text] - 수정될 내용
   * @param {string}[todo.status] - 수정될 상태
   */
  updateTodo(event: MouseEventInit, selectedId: Todo['id']) {
    const inputText =
      (event as MouseEvent).target &&
      ((event as MouseEvent).target as HTMLInputElement).innerText;
    if (!inputText) return;
    const selectedIndex = this.todoList.findIndex(
      (todo) => todo.id === selectedId
    );
    const selectedTodo = this.todoList[selectedIndex];
    const newTodo = {
      ...selectedTodo,
      content: inputText,
    };
    this.todoList.splice(selectedIndex, 1, newTodo);
    this.render();
  }

  updateTodoStatus(selectedId: Todo['id']) {
    const selectedIndex = this.todoList.findIndex(
      (todo) => todo.id === selectedId
    );
    const selectedTodo = this.todoList[selectedIndex];
    const newTodo = {
      ...selectedTodo,
      isDone: !selectedTodo.isDone,
    };
    this.todoList.splice(selectedIndex, 1, newTodo);
    this.render();
  }
  /**
   *
   * @param {number}id
   */
  removeTodo(id: Todo['id']) {
    console.log(id);
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    this.render();
  }

  generateTodoList(todoList: Todo) {
    const containerEl = document.createElement('div');
    const todoTemplate = `<div class="item__div" >
    <input type="checkbox" ${todoList.isDone && 'checked'}/>
    <div class='content ${todoList.isDone && 'checked'}'>${
      todoList.content
    }</div>
    <button>X</button>
    </div>`;

    containerEl.classList.add('item');
    containerEl.innerHTML = todoTemplate;

    const delBtn = containerEl.querySelector('button');
    const checkboxEl = containerEl.querySelector('input[type=checkbox]');
    const contentEl = containerEl.querySelector('.content');

    delBtn?.addEventListener('click', () => this.removeTodo(todoList.id));
    contentEl?.addEventListener('blur', (event) =>
      this.updateTodo(event, todoList.id)
    );
    checkboxEl?.addEventListener('change', () =>
      this.updateTodoStatus(todoList.id)
    );
    return containerEl;
  }

  render() {
    const todoListEl = document.querySelector('.todo-items');
    const todoCountEl = document.querySelector('#todo-count');
    todoListEl?.replaceChildren();
    const currentTodoList = this.getTodoListByFilter(this.filterStatus);
    const fragment = document.createDocumentFragment();
    const todoListComponent = currentTodoList.map((todo) =>
      this.generateTodoList(todo)
    );

    fragment.append(...todoListComponent);

    todoListEl?.appendChild(fragment);
    if (todoCountEl) {
      (todoCountEl as HTMLDivElement).innerText = String(
        currentTodoList.length
      );
    }
  }
}

const todoApp = new TodoApp();
todoApp.render();
