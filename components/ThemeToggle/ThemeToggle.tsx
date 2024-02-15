import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeToggle = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]);

  return (
    <Switch
      onChange={toggleTheme}
      isSelected={isChecked}
      color="default"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <FaMoon className={className} />
        ) : (
          <FaSun className={className} />
        )
      }
    />
  );
};
