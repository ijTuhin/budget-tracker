import React from "react";
import { MdDeleteForever } from "react-icons/md";
export default function DeleteItem() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-600"
    >
      Remove
      <span className="text-xl">
        <MdDeleteForever />
      </span>
    </button>
  );
}
