import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        padding: "20px",
        background: "#1e1e1e",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>alx-project-0x02</h1>

      <nav>
        <Link href="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>

        <Link href="/home" style={{ color: "white", marginRight: "15px" }}>
          /home
        </Link>

        <Link href="/about" style={{ color: "white", marginRight: "15px" }}>
          /about
        </Link>
      </nav>
    </header>
  );
}
