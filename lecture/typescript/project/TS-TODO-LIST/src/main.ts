import './style.css';

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

class TodoApp {
  todoList: Todo[];
  /**
   * @constructs TodoApp
   */
  constructor() {
    this.todoList = [];
    this.initEvent();
  }

  initEvent() {
    const inputEl = document.querySelector('#todo-input');

    inputEl?.addEventListener('keydown', this.addTodo);
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

    this.render([newTodo]);
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
  getTodoListByFilter(filterType) {}

  /**
   * 할일의 내용과 상태를 수정할 수 있다.
   *
   * @param {Object}todo - 수정될 할 일
   * @param {string}[todo.text] - 수정될 내용
   * @param {string}[todo.status] - 수정될 상태
   */
  updateTodo({ id, text, status }) {}
  /**
   *
   * @param {number}id
   */
  removeTodo(id: Todo['id']) {
    console.log(id);
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    this.render(this.todoList);
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
    delBtn?.addEventListener('click', () => this.removeTodo(todoList.id));
    return containerEl;
  }

  render(todoList: Todo[] = []) {
    const todoListEl = document.querySelector('.todo-items');
    const fragment = document.createDocumentFragment();
    const todoListComponent = todoList.map((todo) =>
      this.generateTodoList(todo)
    );

    fragment.append(...todoListComponent);

    todoListEl?.appendChild(fragment);
  }
}

const todoApp = new TodoApp();
todoApp.render();
