import React from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-28 flex items-center justify-center">
      <div className="bg-gray-50 p-16 rounded-lg">
        <p className="text-4xl font-bold text-gray-700">404 : Page Not Found</p>
        <p className="text-sm text-gray-500 pb-8 pt-3.5">
          Looks like you've entered a broken link or a URL that doesn't exist on
          this site
        </p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-x-1 hover:text-green-600 hover:font-medium text-green-500"
        >
          <span>
            <IoArrowUndoSharp />
          </span>
          Go back
        </button>
      </div>
    </div>
  );
}
