import React from "react";

export default function ErrorMessage({ message, visible }) {
  if (!visible) return null;
  return (
    <div>
      <label style={{ lineHeight: 1.2 }} className="text-danger error-message">
        {message}
      </label>
    </div>
  );
}
