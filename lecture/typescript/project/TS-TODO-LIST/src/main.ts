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
  constructor() {}
  /**
   * 할일을 추가할 수 있다.
   * @param {string} text
   */
  addTodo(text) {}

  /**
   *모든 할 일을 조회할 수 있다.
   *
   * @returns {Todo[]}전체할일
   */
  getTodoList() {
    const todo = { id: 13243, content: 'T', isDone: false };
    return [todo];
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
  removeTodo(id) {}
  generateTodoList(todoList) {
    const containerEl = document.createElement('div');
    const todoTemplate = `<div class="item__div">
    <input type="checkbox ${todoList.isDone && 'checked'}"/>
    <div class='content ${todoList.isDone && 'checked'}'>${
      todoList.content
    }</div>
    <button>X</button>
    </div>`;

    containerEl.classList.add('item');
    containerEl.innerHTML = todoTemplate;
    return containerEl;
  }
  render() {
    console.log('Render');
    const todoListEl = document.querySelector('.todo-items');
    const fragment = document.createDocumentFragment();
    const todoListComponent = this.getTodoList().map((todo) =>
      this.generateTodoList(todo)
    );

    fragment.append(...todoListComponent);

    todoListEl?.appendChild(fragment);

    console.log(todoListEl);
  }
}

const todoApp = new TodoApp();
todoApp.render();
