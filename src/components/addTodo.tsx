import { addTodo } from "@/lib/actions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function AddTodo() {
  return (
    <form className="p-5" action={addTodo}>
      <div className="flex items-center gap-5">
        <Label htmlFor="title">Todo</Label>
        <Input
          required
          name={"title"}
          id="title"
          type="text"
          placeholder="Todo Name"
        />
        <Button type="submit">Add Todo</Button>
      </div>
    </form>
  );
}
