import React, { useState } from "react";
import { CardProps } from "../../interfaces"; // relative path to your interfaces

interface PostModalProps {
  onSubmit: (data: CardProps) => void; // callback to send data to parent
}

export default function PostModal({ onSubmit }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    onSubmit({ title, content }); // send data to parent
    setTitle("");
    setContent("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          background: "#1e1e1e",
          color: "white",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Add New Post
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              width: "400px",
              maxWidth: "90%",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>Add New Post</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginBottom: "10px", padding: "8px" }}
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ marginBottom: "10px", padding: "8px", resize: "vertical" }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  style={{ marginRight: "10px", padding: "8px 12px" }}
                >
                  Cancel
                </button>
                <button type="submit" style={{ padding: "8px 12px" }}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
