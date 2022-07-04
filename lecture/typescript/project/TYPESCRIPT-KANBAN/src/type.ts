export interface Todo {
  id: string;
  content: {
    title: string;
    body: string;
  };
  isDone: boolean;
  category: string;
  tags?: {
    id: string;
    content: string;
  }[];
}

export interface inProgressTodo extends Todo {
  isDone: false;
}

export interface DoneTodo extends Todo {
  isDone: true;
}

export interface TodoList {
  id: string;
  title: string;
  list: Todo[];
}

export function isButtonElement(
  targetElement: EventTarget | HTMLElement
): targetElement is HTMLButtonElement {
  return targetElement && targetElement instanceof HTMLButtonElement;
}
