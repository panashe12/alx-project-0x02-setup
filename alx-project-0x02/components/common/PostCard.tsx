import React from "react";
import { PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
        background: "#fafafa",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{title}</h2>
      <p style={{ marginTop: "8px" }}>{content}</p>
      <p style={{ marginTop: "12px", fontStyle: "italic", color: "gray" }}>
        User ID: {userId}
      </p>
    </div>
  );
}
