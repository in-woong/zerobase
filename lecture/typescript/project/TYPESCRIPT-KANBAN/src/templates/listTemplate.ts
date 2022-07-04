import { Todo } from './../type';
import { tagTemplate } from './tagTemplate';

export function listTemplate({
  todoId,
  title,
  content,
  tags,
}: {
  todoId: Todo['id'];
  title: Todo['content']['title'];
  content: Todo['content'];
  tags: Todo['tags'];
}) {
  return `
    <section class="todo" id="${title}+${todoId}">
        <div class="todo-item">
            <div class="wrapper">
                <div class="item-header">
                    <div class="item-title">
                        <span class="item-title-icon">item-icon</span>
                        <div class="title>${content ? content.title : ''}></div>
                    </div>
                    <div class="todo-control">                        
                        <button class="delete-item" id="delete-todo-${todoId}">
                            <span class="delete-btn">delete-${todoId}</span>
                        </button>
                    </div>
                </div>
        
                <div class="todo-content">${content ? content.body : ''}</div>
            </div>
        
            ${tagTemplate(tags, todoId)}

    </div>
</section>`;
}
