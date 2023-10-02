// ダークモード切り替えボタン
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        aria-label="ThemeButton"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <>
            {theme === "dark" ? (
              // <DarkModeIcon fontSize="medium" />
              // <DarkModeIcon />
              <p>Dark</p>
            ) : (
              // <LightModeIcon fontSize="medium" />
              // <LightModeIcon />
              <p>sun</p>
            )}
          </>
        )}
      </button>
    </>
  );
}
