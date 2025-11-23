import React from "react";
import { type CardProps } from "@/interfaces"; // if you use aliases
// or use relative path:
// import { CardProps } from "../../interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        maxWidth: "300px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
