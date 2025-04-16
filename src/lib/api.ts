export const fetchTodos = async () => {
  const response = await fetch("/api/todos");
  if (!response.ok) {
    throw new Error(`Failed to fetch todos: ${response.statusText}`);
  }
  return response.json();
};

export const addTodo = async (newTodo: string) => {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTodo, completed: false }),
  });

  if (!response.ok) {
    throw new Error(`Failed to add todo: ${response.statusText}`);
  }

  return response.json();
};

export const deleteTodo = async (id: number) => {
  const response = await fetch(`/api/todos?id=${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete todo: ${response.statusText}`);
  }
};
