import './style.css';
import { v4 as uuidv4 } from 'uuid';

import { Todo, TodoList } from './type';
import { defaultKanban } from './mock';

class KanbanApp {
  list: TodoList[];

  constructor(data: TodoList[]) {
    this.list = data;

    this.render();
    this.attachEvent();
  }

  render() {
    const $addListButton = document.createElement('button');
    $addListButton.classList.add('board', 'add');
    $addListButton.innerHTML = '<span class="plus-btn blue">+</span>';

    const $board = document.querySelector('.todo-container');

    if ($board) {
      $board.innerHTML = '';

      const fragment = document.createDocumentFragment();
      const listElements = this.list.map((list) => this.generateList(list));

      fragment.append(...listElements);
      $board.append(fragment, $addListButton);
    }
  }

  attachEvent() {
    const $addListButton = document.querySelector('.board.add');
    const $removeListButton = document.querySelectorAll('.kanban-delete');
    const $addTodoButton = document.querySelectorAll('.todo-item.add');

    $addListButton?.addEventListener('click', () => {
      const newId = uuidv4();
      this.list = [
        ...this.list,
        {
          id: newId,
          title: `kanban-${newId}`,
          list: [],
        },
      ];
      this.render();
    });

    $removeListButton?.forEach((btn) => {
      btn?.addEventListener('click', ({ currentTarget }) => {
        const id = (currentTarget as HTMLButtonElement).id.split('kanban-')[1];

        this.removeList(id);
      });
    });

    $addTodoButton.forEach((btn) => {
      btn.addEventListener('click', ({ currentTarget }) => {
        if (currentTarget instanceof HTMLButtonElement) {
          const [, category] = (currentTarget as HTMLButtonElement).id.split(
            'add-todo-'
          );

          currentTarget?.closest('.wrapper')?.prepend(this.addTodo(category));
        }
      });
    });
  }

  addTodo(category: string) {
    const $list = document.createElement('section');
    $list.classList.add('todo');
    $list.setAttribute('id', 'add-item');
    const template = `
    <div class="todo-item add-item">
        <div>
            <div class="item-header">
                <div class="item-title">
                    <span class="item-title-icon"></span>
                    <div class="title add-title" contentEditable> 제목</div>
                </div>
            </div>
            <div class="todo-content add-content" contentEditable>내용</div>
        
        </div>
        <div class="todo-control">
            <button class="cancel">Cancel</button>
            <button class="add>Add Item</button>
        </div>
    </div>`;
    $list.innerHTML = template;
    $list
      .querySelector('.add')
      ?.addEventListener('click', ({ currentTarget }) => {
        const listId = this.list.findIndex(({ title }) => title === category);

        if (currentTarget && currentTarget instanceof HTMLButtonElement) {
          const $todo = currentTarget.closest('.todo-item');
          const title = $todo?.querySelector('.add-title')?.textContent;
          const body = $todo?.querySelector('.add-content')?.textContent;

          const newTodo: Todo = {
            id: uuidv4(),
            content: {
              title: title ?? '',
              body: body ?? '',
            },
            isDone: false,
            category: category,
            tags: [],
          };

          this.list[listId].list = [...this.list[listId].list, newTodo];

          this.render();
        }
      });
    return $list;
  }

  removeList(selectedId: string) {
    this.list = this.list.filter((list) => list.id !== selectedId);
    this.render();
  }

  generateList({ id, title, list }: TodoList) {
    const $list = document.createElement('section');
    $list.classList.add('board');
    const addBtnElement = `
    <section class="todo">
        <button class="todo-item add" id="add-todo-${title}">
            <span class="plus-btn blue">plus</span>
        </button>
    </section>`;

    const todoHTML = list
      ?.map(({ id: todoId, content, tags }) => {
        return `
        <section class="todo" id="${title}+${todoId}">
            <div class="todo-item">
                <div class="wrapper">
                    <div class="item-header">
                        <div class="item-title">
                            <span class="item-title-icon">item-icon</span>
                            <div class="title>${
                              content ? content.title : ''
                            }></div>
                        </div>
                        <div class="todo-control">                        
                            <button class="delete-item" id="delete-todo-${todoId}">
                                <span class="delete-btn">delete-${todoId}</span>
                            </button>
                        </div>
                    </div>
            
                    <div class="todo-content">${
                      content ? content.body : ''
                    }</div>
                </div>
            
                <div class="tags">
                ${
                  tags &&
                  tags
                    .map(({ id: tagId, content }) => {
                      return `<span class="tag" id="tag-${todoId}>
                                ${content}
                                <button class="delete-tag delete-btn" id="todo-delete-${tagId}">delete-${tagId}</button>
                                </span>`;
                    })
                    .join('')
                }
                <div class="tag add-tag-btn">
                    <span contentEditable>태그</span>
                    <button class="add-btn" id="todo-${todoId}">add-${todoId}</button>
                </div>

            </div>
        </div>
    </section>
    `;
      })
      .join('');

    const $item = `
                <section class=board-title">
                    <div class="board-header">
                        <div class="total"><span id="todo-count">${
                          list?.length ?? 0
                        }</span></div>
                        <h2 class="title">${title}</h2>
                    </div>
                    
                    <div class="board-control">
                        <button class="kanban-delete" id="kanban-${id}">
                            <span class="delete-btn">kanban-deleteBtn</span>
                        </button>
                    </div>
                    
                    <div class="wrapper">
                        ${addBtnElement}
                        ${list?.length ? todoHTML : ''}
                    </div>`;
    $list.innerHTML = $item;
    return $list;
  }
}

new KanbanApp(defaultKanban);
