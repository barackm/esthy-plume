import React from "react";

export default function ErrorMessage({ message, visible }) {
  if (!visible) return null;
  return (
    <div>
      <label className="text-danger">{message}</label>
    </div>
  );
}
