import './style.css';
import { v4 as uuidv4 } from 'uuid';

import { isButtonElement, Todo, TodoList, InProgressTodo, Tag } from './type';
import { defaultKanban } from './mock';
import {
  cardTemplate,
  addListBtnTemplate,
  listTemplate,
  listHeaderTemplate,
} from './templates';

class KanbanApp {
  kanban: TodoList[];

  constructor(data: TodoList[]) {
    this.kanban = data;

    this.render();
  }

  mount() {
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
      const listElements = this.kanban.map((todo) => this.generateList(todo));

      fragment.append(...listElements);
      $board.append(fragment, $addListButton);
    }
    this.attachEvent();
  }

  attachEvent() {
    const $addListButton = document.querySelector('.board.add');
    const $removeListButton = document.querySelectorAll('.kanban-delete');
    const $addTodoButton = document.querySelectorAll('.todo-item.add');
    const $removeTodoButton = document.querySelectorAll('.delete-item');
    const $addTagButton = document.querySelectorAll('.add-btn');
    const $removeTagButton = document.querySelectorAll('.delete-tag');

    $addListButton?.addEventListener('click', () => {
      const newId = uuidv4();

      this.kanban = [
        ...this.kanban,
        {
          id: newId,
          title: `kanban-${newId}`,
          list: [],
        },
      ];
      this.render();
    });

    $removeListButton?.forEach((btn) => {
      btn.addEventListener('click', ({ currentTarget }) => {
        if (currentTarget && isButtonElement(currentTarget)) {
          const id = currentTarget.id.split('kanban-')[1];

          this.removeList(id);
        }
      });
    });

    $addTodoButton.forEach((btn) => {
      btn.addEventListener('click', ({ currentTarget }) => {
        if (currentTarget && isButtonElement(currentTarget)) {
          const [, category] = currentTarget.id.split('add-todo-');

          currentTarget?.closest('.wrapper')?.prepend(this.addTodo(category));
        }
      });
    });

    $removeTodoButton.forEach((btn) => {
      btn.addEventListener('click', ({ currentTarget }) => {
        if (currentTarget && isButtonElement(currentTarget)) {
          const category = currentTarget?.closest('.todo')?.id.split('+')[0];
          const selectedId = currentTarget.id.split('delete-todo-')[0];

          this.removeTodo(selectedId, category ?? '');
        }
      });
    });

    $addTagButton.forEach((btn) => {
      btn.addEventListener('click', ({ currentTarget }) => {
        if (!(currentTarget && isButtonElement(currentTarget))) return;

        const category = currentTarget.closest('.todo')?.id.split('+')[0];
        const selectedId = currentTarget.id.split('todo-')[1];

        const tagContent =
          currentTarget.closest('.tag')?.querySelector('span')?.textContent ??
          '';

        this.addTag({ category, selectedId, tagContent });
      });
    });

    $removeTagButton.forEach((btn) => {
      btn.addEventListener('click', ({ currentTarget }) => {
        if (!(currentTarget && isButtonElement(currentTarget))) return;

        const category = currentTarget.closest('.todo')?.id.split('+')[0];

        const selectedTodoId = currentTarget
          .closest('.tag')
          ?.id.split('tag-')[1];
        const selectedTagId = currentTarget.id.split('todo-delete-')[1];

        this.removeTag({ category, selectedTagId, selectedTodoId });
      });
    });
  }

  addTag({
    category,
    selectedId,
    tagContent,
  }: {
    category?: Todo['category'];
    selectedId: Todo['id'];
    tagContent?: Tag['content'];
  }) {
    const listId = this.kanban.findIndex((list) => list.title === category);
    const targetList = this.kanban.find((list) => list.title === category);

    const todo = targetList?.list.find((todo) => todo.id === selectedId);
    const todoIndex = targetList?.list.findIndex(
      (todo) => todo.id === selectedId
    );

    todo?.tags?.push({
      id: uuidv4(),
      content: tagContent ?? '태그',
    });

    if (todoIndex && todo) {
      this.kanban[listId].list.splice(todoIndex, 1, todo);
    }

    this.render();
  }

  removeTag({
    category,
    selectedTagId,
    selectedTodoId,
  }: {
    category?: Todo['category'];
    selectedTagId: Tag['id'];
    selectedTodoId?: Todo['id'];
  }) {
    const listId = this.kanban.findIndex((list) => list.title === category);
    const targetList = this.kanban.find((list) => list.title === category);

    if (targetList) {
      const todo = targetList.list.find((todo) => todo.id === selectedTodoId);
      const todoIndex = targetList.list.findIndex(
        (todo) => todo.id === selectedTodoId
      );

      const newTag = todo?.tags?.filter((tag) => tag.id !== selectedTagId);

      this.kanban[listId].list[todoIndex].tags = newTag;
      this.render();
    }
  }

  removeTodo(selectedId: string, category: string) {
    const listId = this.kanban.findIndex((list) => list.title === category);
    const targetList = this.kanban.find((list) => list.title === category);

    if (targetList) {
      this.kanban[listId].list = targetList?.list.filter(
        (todo) => todo.id !== selectedId
      );

      this.render();
    }
  }

  addTodo(category: string) {
    const $list = document.createElement('section');
    $list.classList.add('todo');
    $list.setAttribute('id', 'add-item');

    $list.innerHTML = cardTemplate();
    $list
      .querySelector('.add')
      ?.addEventListener('click', ({ currentTarget }) => {
        const listId = this.kanban.findIndex(({ title }) => title === category);

        if (currentTarget && currentTarget instanceof HTMLButtonElement) {
          const $todo = currentTarget.closest('.todo-item');
          const title = $todo?.querySelector('.add-title')?.textContent;
          const body = $todo?.querySelector('.add-content')?.textContent;

          const newTodo: InProgressTodo = {
            id: uuidv4(),
            content: {
              title: title ?? '',
              body: body ?? '',
            },
            isDone: false,
            category: category,
            tags: [],
          };

          this.kanban[listId].list = [...this.kanban[listId].list, newTodo];

          this.render();
        }
      });
    return $list;
  }

  removeList(selectedId: Todo['id']) {
    this.kanban = this.kanban.filter((list) => list.id !== selectedId);
    this.render();
  }

  generateList({ id, title, list }: TodoList) {
    const $list = document.createElement('section');
    $list.classList.add('board');
    const addBtnElement = addListBtnTemplate(title);

    const listHTML = list
      ?.map(
        ({
          id: todoId,
          content,
          tags,
        }: Pick<Todo, 'id' | 'content' | 'tags'>) =>
          listTemplate({ todoId, title, content, tags })
      )
      .join('');

    const $item = `${listHeaderTemplate({ list, title, id })}
                <div class="wrapper">
                    ${addBtnElement}
                    ${list?.length ? listHTML : ''}
                </div>`;

    $list.innerHTML = $item;
    return $list;
  }
}

new KanbanApp(defaultKanban);
