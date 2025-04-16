"use client";
import * as React from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  React.useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      <button
        aria-label="Toggle dark mode"
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext<{
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}>({
  theme: "light",
  setTheme: () => {},
});
