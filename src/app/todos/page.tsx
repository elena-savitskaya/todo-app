"use client";

import { toastError, toastSuccess } from "@/lib/toast";
import { Todo } from "@/types";
import { useState } from "react";
import { fetchTodos, addTodo, deleteTodo } from "@/lib/api";
import { TodoItem } from "@/app/components/todo-item";
import { Loader } from "@/app/components/loader";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function TodosPage() {
  const [newTodo, setNewTodo] = useState<string>("");
  const queryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        const createdTodo = await addTodo(newTodo);
        toastSuccess("Todo added successfully!");
        setNewTodo("");

        queryClient.setQueryData<Todo[]>(["todos"], (old) =>
          old ? [...old, createdTodo] : [createdTodo]
        );
      } catch {
        toastError("Failed to add todo.");
      }
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      toastSuccess("Todo deleted.");

      queryClient.setQueryData<Todo[]>(["todos"], (old) =>
        old ? old.filter((todo) => todo.id !== id) : []
      );
    } catch {
      toastError("Failed to delete todo.");
    }
  };

  if (isLoading) return <Loader />;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 min-h-full p-4 md:p-6">
      <div className="flex flex-col items-center justify-center gap-3 w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Todo List
        </h1>

        <div className="w-full flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition cursor-pointer"
          >
            Add
          </button>
        </div>

        <ul className="w-full flex flex-col gap-2">
          {todos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
