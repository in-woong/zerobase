import { Todo, Tag } from './../type';

export function tagTemplate(tags: Todo['tags'], todoId: Todo['id']) {
  return `
  <div class="tags">
    ${
      tags &&
      tags
        .map(({ id: tagId, content }: Tag) => {
          return `<span class="tag" id="tag-${todoId}">
                    ${content}
                    <button class="delete-tag delete-btn" id="todo-delete-${tagId}">delete</button>
                    </span>`;
        })
        .join('')
    }
    <div class="tag add-tag-btn">
        <span contentEditable>태그</span>
        <button class="add-btn" id="todo-${todoId}">add-${todoId}</button>
    </div>
  </div>`;
}
