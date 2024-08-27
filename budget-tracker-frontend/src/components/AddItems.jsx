import { useState } from "react";
import "preline";
import { useAuthUser } from "../authentication/UserContext";
export default function AddItems({ setList, list }) {
  const { AddItemsToList } = useAuthUser();
  const [item, setItem] = useState({
    type: null,
    name: null,
    amount: null,
  });
  const handleAddItemToList = () => {
    console.log(item);
    AddItemsToList(item);
    setList(list?.concat(item));
  };
  return (
    <section className="px-5 py-8 shadow-lg rounded col-span-2 space-y-3">
      <p className="text-2xl font-bold text-green-500">Add New Item</p>
      <div className="flex gap-x-2">
        <div className="hs-dropdown relative inline-flex">
          <button
            id="hs-dropdown-default"
            type="button"
            className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            {!item.type
              ? "Choose Type"
              : item.type === 1
              ? "Income"
              : "Expense"}
            <svg
              className="hs-dropdown-open:rotate-180 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-default"
          >
            <button
              onClick={() =>
                setItem({
                  ...item,
                  type: 1,
                })
              }
              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            >
              Income
            </button>
            <button
              onClick={() =>
                setItem({
                  ...item,
                  type: 2,
                })
              }
              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            >
              Expense
            </button>
          </div>
        </div>
        <input
          onChange={(e) =>
            setItem({
              ...item,
              name: e.target.value,
            })
          }
          className="w-40 p-3 border border-gray-200 rounded outline-gray-400"
          type="text"
          placeholder="Item"
          required
        />
        <input
          onChange={(e) =>
            setItem({
              ...item,
              amount: e.target.value,
            })
          }
          className="w-40 p-3 border border-gray-200 rounded outline-gray-400"
          type="number"
          name="amount"
          id="amount"
          placeholder="Amount"
          required
        />
        {!item.type || !item.name || !item.amount ? (
          <button
            disabled
            className="px-10 py-3 border cursor-not-allowed bg-gray-300 text-gray-600 rounded"
          >
            Add
          </button>
        ) : (
          <button
            onClick={handleAddItemToList}
            className="px-10 py-3 border bg-gray-300 text-gray-600 hover:bg-green-600 hover:text-gray-200 rounded"
          >
            Add
          </button>
        )}
      </div>
    </section>
  );
}
