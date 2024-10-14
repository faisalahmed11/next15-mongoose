import mongoose from "mongoose";

export interface Todos extends mongoose.Document {
  title: string;
  completed?: boolean;
}

// creating todo schema
const TodoSchema = new mongoose.Schema<Todos>({
  title: {
    type: String,
    required: [true, "Please provide a todo"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// creating todo model
export default mongoose.models.Todo ||
  mongoose.model<Todos>("Todo", TodoSchema);
