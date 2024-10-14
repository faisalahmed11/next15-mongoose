"use client";
import { Check, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteTodo, toggleTodoComplete } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { useActionState } from "react";

export default function Todo({
  title,
  completed,
  id,
}: {
  title: string;
  completed: boolean;
  id: string;
}) {
  const updatedToggleCompleteAction = toggleTodoComplete.bind(
    null,
    null,
    id,
    completed
  );
  const updatedDeleteAction = deleteTodo.bind(null, null, id);

  const [deleteState, deleteAction, deletePending] = useActionState(
    updatedDeleteAction,
    null
  );
  const [toggleCompleteState, toggleCompleteAction, toggleCompletePending] =
    useActionState(updatedToggleCompleteAction, null);
  return (
    <div className="flex justify-between border p-2 items-center my-2">
      <p
        className={cn(
          "text-xl font-semibold",
          completed && "line-through text-muted-foreground decoration-black "
        )}
      >
        {title}
      </p>
      <div className="flex gap-3">
        <Button
          onClick={async () => await deleteAction()}
          className="bg-destructive-foreground hover:bg-destructive text-destructive hover:text-destructive-foreground"
          disabled={deletePending || toggleCompletePending}
        >
          <Trash2 className="" />
        </Button>
        <Button
          disabled={toggleCompletePending || toggleCompletePending}
          onClick={async () => await toggleCompleteAction()}
          className=""
          variant={"secondary"}
        >
          <Check className="" />
        </Button>
      </div>
    </div>
  );
}
