import React from "react";
import Header from "@/components/layout/Header"; // ← added
import Button from "../components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />   {/* ← added */}

      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>

        <p className="text-lg text-center max-w-2xl">
          This is the About page of your ALX Project.
          Everything here is fully customizable.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Button
            label="Small Rounded"
            size="small"
            shape="rounded-sm"
            onClick={() => alert("Small clicked")}
          />

          <Button
            label="Medium Rounded"
            size="medium"
            shape="rounded-md"
            onClick={() => alert("Medium clicked")}
          />

          <Button
            label="Large Rounded Full"
            size="large"
            shape="rounded-full"
            onClick={() => alert("Large clicked")}
          />
        </div>
      </div>
    </>
  );
}

