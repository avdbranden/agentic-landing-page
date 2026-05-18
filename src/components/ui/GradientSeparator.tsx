import { cn } from "@/lib/utils";

interface GradientSeparatorProps {
  className?: string;
  direction?: "down" | "up";
}

export function GradientSeparator({
  className,
  direction = "down",
}: GradientSeparatorProps) {
  return (
    <div
      className={cn(
        "w-full h-24 pointer-events-none",
        direction === "down"
          ? "bg-gradient-to-b from-transparent to-neutral-50"
          : "bg-gradient-to-b from-neutral-50 to-transparent",
        className
      )}
      aria-hidden
    />
  );
}
