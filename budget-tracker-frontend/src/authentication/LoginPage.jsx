import { useState } from "react";
import { FaCoins } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuthUser } from "./UserContext";
import Spinner from "../components/Spinner";
export default function LoginPage() {
  const { loading, UserSignUp, UserLogin, authUser } = useAuthUser();
  const data = useLoaderData();
  console.log(data.name, authUser);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(0);
  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!toggle) {
      UserLogin({
        email: e.target.email.value,
        password: e.target.password.value,
      });
      navigate("/");
    } else {
      UserSignUp({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });
      // setToggle(!toggle)
      // navigate("/login", { replace: true });
      window.location.reload();
    }
  };
  return (
    <main className="w-full flex justify-center">
      <div className="mt-20 py-10 px-10 shadow-lg w-[30rem] space-y-6">
        <h1 className="font-bold text-2xl text-green-500 flex items-center gap-x-3">
          <span>
            <FaCoins />
          </span>
          Budget Tracker - {toggle ? "Sign up" : "Login"}
        </h1>
        <form onSubmit={handleFormSubmission} className="max-w-sm space-y-3">
          {toggle ? (
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm outline-green-500"
                placeholder="Enter name" required
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <svg
                  className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm outline-green-500"
              placeholder="Email address" required
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <svg
                className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 8l9 6 9-6V6c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v2z" />
                <path d="M3 8l9 6 9-6M4 19h16c.6 0 1-.4 1-1V8.6l-9 6-9-6V18c0 .6.4 1 1 1z" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm outline-green-500"
              placeholder="Enter password" required
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <svg
                className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                <circle cx="16.5" cy="7.5" r=".5"></circle>
              </svg>
            </div>
          </div>
          <div className="w-full flex justify-start text-xs">
            <button
              type="button"
              onClick={() => setToggle(!toggle)}
              className="text-green-500 hover:underline hover:underline-offset-4 font-semibold"
            >
              {toggle ? "Have an account?" : "No account? Create new"}
            </button>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 rounded bg-gray-300 text-white hover:text-gray-50 hover:bg-green-500"
            >
              {toggle ? "Sign up" : "Login"}
            </button>
          </div>
        </form>
      </div>
      <Spinner loading={loading} />
    </main>
  );
}
