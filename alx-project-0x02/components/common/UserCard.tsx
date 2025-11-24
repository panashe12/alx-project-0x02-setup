import React from "react";
import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{name}</h2>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.city}
      </p>
    </div>
  );
}
