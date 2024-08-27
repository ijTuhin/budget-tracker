import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import { FaCoins } from "react-icons/fa";
import { useAuthUser } from "../authentication/UserContext";
import { useNavigate } from "react-router-dom";

export default function NavBar({ data }) {
  const { logOut } = useAuthUser();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
    navigate("/login", { replace: true });
  }
  return (
    <nav className="px-12 py-5 flex justify-between bg-green-600 text-gray-100 mb-10">
      <h1 className="flex items-center gap-x-2 text-2xl font-mono">
        <span>
          <FaCoins />
        </span>
        Budget Tracker
      </h1>
      <div className="flex justify-end divide-x-2 divide-gray-300">
        <p className="px-3 flex items-center gap-x-2">
          <span className="text-xl">
            <FaCircleUser />
          </span>
          {data?.name}
        </p>
        <button onClick={handleLogOut} className="px-3 flex items-center">
          <span className="text-lg">
            <PiSignOutBold />
          </span>
        </button>
      </div>
    </nav>
  );
}
