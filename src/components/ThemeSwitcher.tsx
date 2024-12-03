"use client";

import { FiSun, FiMoon, FiLoader } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const iconSize = 25;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <FiLoader className="animate-spin" size={iconSize} />;

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        onClick={() => setTheme("light")}
        className="text-yellow-500"
        size={iconSize}
      />
    );
  }

  if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")} size={iconSize} />;
  }
}
