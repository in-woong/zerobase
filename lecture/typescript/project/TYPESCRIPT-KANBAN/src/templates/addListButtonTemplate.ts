export function addListBtnTemplate(title: string) {
  return `
    <section class="todo">
        <button class="todo-item add" id="add-todo-${title}">
            <span class="plus-btn blue">plus</span>
        </button>
    </section>`;
}
