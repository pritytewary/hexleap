"use client";

import { useAccent } from "@/providers/accent";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useAccent();

  return (
    <div className="flex items-center justify-end p-4 px-4">
      <button
        className="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
