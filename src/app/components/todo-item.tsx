"use client";

import { Todo } from "@/types";
import DeleteIcon from "@/assets/delete.svg";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
};

export const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  return (
    <li
      key={todo.id}
      className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-xl border border-gray-200"
    >
      <span className="text-gray-800 max-w-[280px] break-words">
        {todo.title}
      </span>
      <DeleteIcon
        onClick={() => onDelete(todo.id)}
        className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
      />
    </li>
  );
};
