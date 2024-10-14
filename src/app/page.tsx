import AddTodo from "@/components/addTodo";
import { getTodos } from "@/lib/data";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main>
      <h1>Todos</h1>
      <AddTodo />
      <div>
        {todos.map((todo) => (
          <div key={todo._id}>{todo.title}</div>
        ))}
      </div>
    </main>
  );
}
