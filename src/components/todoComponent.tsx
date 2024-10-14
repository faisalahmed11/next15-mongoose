"use client";
import { addTodo } from "@/lib/actions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useActionState, useOptimistic } from "react";
import Todo from "./todo";

type TodoType = {
  title: string;
  completed?: boolean;
  _id?: string;
};

export default function TodoComponent({ todos }: { todos: TodoType[] }) {
  const [addState, addAction, addPending] = useActionState(addTodo, null);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic<
    TodoType[],
    TodoType
  >(todos, (state, mewTodo) => [...state, mewTodo]);

  return (
    <>
      <form
        className="p-5"
        action={async (formData: FormData) => {
          const title = formData.get("title") as string;
          addOptimisticTodo({
            title: title,
            completed: false,
            _id: Date.now().toString(),
          });
          await addAction(formData);
        }}
      >
        <div className="flex items-center gap-5">
          <Label htmlFor="title">Todo</Label>
          <Input
            autoFocus={true}
            required
            name={"title"}
            id="title"
            type="text"
            placeholder="Todo Name"
            disabled={addPending}
          />
          <Button disabled={addPending} type="submit">
            Add Todo
          </Button>
        </div>
      </form>
      <div>
        {optimisticTodos.map((todo) => (
          <Todo
            key={todo._id}
            id={String(todo._id)}
            title={todo.title}
            completed={todo.completed!}
          />
        ))}
      </div>
    </>
  );
}
