import Todo from "@/models/Todo";
import dbConnect from "./dbConnect";

export async function getTodos() {
  await dbConnect();
  const todos = await Todo.find({});
  return todos;
}
