import { clsx } from "clsx";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export function ArrowButton({ isLeft }: { isLeft?: boolean }) {
  return (
    <button className="py-4 px-2 border-2 h-max border-blue-600 hover:bg-blue-50 hover:bg-opacity-5 hidden md:block">
      <ChevronLeftIcon
        className={clsx("h-6 w-6 text-blue-600", {
          "transform rotate-180": !isLeft,
        })}
      />
    </button>
  );
}
