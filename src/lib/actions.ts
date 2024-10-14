"use server";

import Todo from "@/models/Todo";
import dbConnect from "./dbConnect";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
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
