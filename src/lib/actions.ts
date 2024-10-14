"use server";

import Todo from "@/models/Todo";
import dbConnect from "./dbConnect";
import { revalidatePath } from "next/cache";
import { MongooseError } from "mongoose";

export async function addTodo(previousState: any, formData: FormData) {
  await dbConnect();
  try {
    // creating a todo
    await Todo.create({
      title: formData.get("title"),
    }); /* create a new model in the database */
    console.log("todo created");
  } catch (error) {
    console.log("failed to add todo", error);
  }
  revalidatePath("/");
}
export async function deleteTodo(previousState: any, id: string) {
  await dbConnect();
  try {
    // creating a todo
    await Todo.deleteOne({ _id: id });
    console.log("todo deleted");
  } catch (error: MongooseError | any) {
    console.log("failed to delete todo", error?.message);
  }
  revalidatePath("/");
}
export async function toggleTodoComplete(
  previousState: any,
  id: string,
  completed: boolean
) {
  await dbConnect();
  try {
    // creating a todo
    await Todo.findOneAndUpdate({ _id: id }, { completed: !completed });
    console.log("todo updated");
  } catch (error: MongooseError | any) {
    console.log("failed to delete todo", error?.message);
  }
  revalidatePath("/");
}
