import AddItems from "../components/AddItems";
import IncomeItemTable from "../components/income/IncomeItemTable";
import ExpenseItemTable from "../components/expense/ExpenseItemTable";
import { useState } from "react";

export default function Homepage() {
  const [list, setList] = useState([]);
  const income = 0;
  const expense = 0;
  return (
    <main className="px-20 py-10">
      <h1 className="text-center text-3xl font-medium mb-8">Budget Tracker</h1>
      <div className="grid grid-cols-4 gap-3">
        {/* Total Income */}
        <section className="px-5 py-8 shadow-lg rounded flex flex-col justify-center space-y-2">
          <p className="text-2xl font-bold text-green-500">Income</p>
          <p className="text-2xl font-bold text-green-500">${income}</p>
        </section>
        {/* Total Expense */}
        <section className="px-5 py-8 shadow-lg rounded flex flex-col justify-center space-y-2">
          <p className="text-2xl font-bold text-red-500">Expense</p>
          <p className="text-2xl font-bold text-red-500">${expense}</p>
        </section>
        {/* Add Item */}
        <AddItems setList={setList} list={list} />
      </div>
      <div className="flex gap-x-32 mt-12 px-20">
        {/* Income Items */}
        <IncomeItemTable list={list} />
        {/* Expense Items */}
        <ExpenseItemTable list={list} />
      </div>
    </main>
  );
}
