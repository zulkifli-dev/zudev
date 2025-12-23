"use client";
import { Check, ClipboardCopy } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useToast } from "../ui/use-toast";

function ButtonClipboard({
  className,
  value,
}: {
  className?: string;
  value: string;
}) {
  const { toast } = useToast();

  const [isDone, setIsDone] = useState(false);
  function handleCopy() {
    navigator.clipboard
      .writeText(value)
      .then(async () => {
        toast({
          title: "Berhasil disalin!",
          description: "",
        });
        setIsDone(true);
        await new Promise((r: any) => setTimeout(r, 1000));
      })
      .finally(() => setIsDone(false));
  }
  return (
    <button
      onClick={handleCopy}
      className={twMerge(
        "hover:bg-white hover:text-black p-1 rounded group-hover:block",
        className
      )}
    >
      {isDone ? (
        <Check strokeWidth={1.5} />
      ) : (
        <ClipboardCopy strokeWidth={1.5} />
      )}
    </button>
  );
}

export default ButtonClipboard;
