// import AddTodo from "@/components/todoComponent";
// import Todo from "@/components/todo";
import TodoComponent from "@/components/todoComponent";
import { getTodos } from "@/lib/data";

export default async function Home() {
  const rawTodos = await getTodos();
  const todos = rawTodos.map(({ _id, title, completed }) => {
    return { completed, _id: String(_id), title };
  });

  return (
    <main className="font-sans container p-5 md:max-w-[1000px] md:pt-10 mx-auto">
      <h1 className="text-center text-xl font-sans">
        Nextjs15 and Mongoose Tutorial
      </h1>
      <TodoComponent todos={todos} />
      {/* <div>
        {todos.map((todo) => (
          <Todo
            key={todo._id}
            id={String(todo._id)}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div> */}
    </main>
  );
}
