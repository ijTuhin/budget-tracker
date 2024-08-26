import React from "react";
import { MdDeleteForever } from "react-icons/md";
export default function DeleteItem() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-600 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
    >
      Remove <span className="text-xl"><MdDeleteForever /></span>
    </button>
  );
}
