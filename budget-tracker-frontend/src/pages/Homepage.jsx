import AddItems from "../components/AddItems";
import IncomeItemTable from "../components/income/IncomeItemTable";
import ExpenseItemTable from "../components/expense/ExpenseItemTable";
import { useEffect, useState } from "react";
import { useAuthUser } from "../authentication/UserContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";
export default function Homepage() {
  const { loading } = useAuthUser();
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data.items);
  const [list, setList] = useState([...data.items]);
  const calculatedValue = (v) => {
    let cost = 0;
    list.map((i) => {
      if (i.type === v) cost = cost + parseInt(i.amount);
    });
    return cost;
  };
  /* For Preline Dropdown */
  useEffect(() => {
    console.log("Initializing Preline components");
    if (
      window.HSStaticMethods &&
      typeof window.HSStaticMethods.autoInit === "function"
    ) {
      window.HSStaticMethods.autoInit();
    } else {
      console.error("HSStaticMethods not found or autoInit is not a function");
    }
  }, [location.pathname]);
  return (
    <>
      <NavBar data={data} />
      <main className="px-20 py-5">
        <div className="grid grid-cols-4 gap-3">
          {/* Total Income */}
          <section className="px-5 py-8 shadow-lg rounded flex flex-col justify-center space-y-2">
            <p className="text-2xl font-bold text-green-500">Income</p>
            <p className="text-2xl font-bold text-green-500">
              ${calculatedValue(1)}
            </p>
          </section>
          {/* Total Expense */}
          <section className="px-5 py-8 shadow-lg rounded flex flex-col justify-center space-y-2">
            <p className="text-2xl font-bold text-red-500">Expense</p>
            <p className="text-2xl font-bold text-red-500">
              ${calculatedValue(2)}
            </p>
          </section>
          {/* Add Item */}
          <AddItems setList={setList} list={list} />
        </div>
        <Spinner loading={loading}/>
        <div className="flex gap-x-32 px-20">
          {/* Income Items */}
          <IncomeItemTable list={list} />
          {/* Expense Items */}
          <ExpenseItemTable list={list} />
        </div>
      </main>
    </>
  );
}
