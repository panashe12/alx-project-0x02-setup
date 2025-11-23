// components/common/Button.tsx
import React from "react";
import { type ButtonProps } from "../../interfaces"; // relative path from components/common

export default function Button({ label, size = "medium", shape = "rounded-md", onClick }: ButtonProps) {
  const sizeClasses: Record<string, string> = {
    small: "padding: 4px 8px; font-size: 0.8rem;",
    medium: "padding: 8px 16px; font-size: 1rem;",
    large: "padding: 12px 24px; font-size: 1.2rem;",
  };

  const shapeClasses: Record<string, string> = {
    "rounded-sm": "border-radius: 4px;",
    "rounded-md": "border-radius: 8px;",
    "rounded-full": "border-radius: 9999px;",
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#1e1e1e",
        color: "white",
        border: "none",
        cursor: "pointer",
        marginRight: "10px",
        ...parseCssString(sizeClasses[size]),
        ...parseCssString(shapeClasses[shape]),
      }}
    >
      {label}
    </button>
  );
}

function parseCssString(css: string) {
  return css.split(";").reduce<Record<string, string>>((acc, rule) => {
    const [key, value] = rule.split(":").map((s) => s?.trim());
    if (key && value) acc[toCamelCase(key)] = value;
    return acc;
  }, {});
}

function toCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}
