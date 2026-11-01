import { useEffect } from "react";
import { useState } from "react";

function MyHeader() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      This is Header
      <button
        onClick={() => {
          setIsDarkMode((prev) => !prev);
        }}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
}

export default MyHeader;
