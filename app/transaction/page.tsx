import React from "react";
import { IoIosNotifications } from "react-icons/io";
import Input from "../Molecules/Input";
import Dropdown from "../Molecules/Dropdown";
import Table from "../Molecules/Table";

const page = () => {
  const currencies = [
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "gbp", label: "GBP" },
    { value: "jpy", label: "JPY" },
  ];

  const period = [
    { value: "today", label: "Today" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
    { value: "year", label: "Year" },
  ];

  return (
    <div>
      <section className="p-4 flex flex-col gap-4 ">
        <div className="text-2xl font-serif border-b-2 pb-4 text-primary flex flex-row  justify-between  w-full">
          <p>Transaction</p>
          <div className="relative">
            {/* Notification Icon */}
            <IoIosNotifications className="text-white text-3xl bg-primary rounded-full p-2" />

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              3 {/* Replace with dynamic notification count */}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-row gap-2 items-center">
            <p className="font-bold">All Transaction</p>
            <Input />
          </div>

          <div className="flex flex-row gap-3">
            <Dropdown placeholder="All Currencies" items={currencies} />
            <Dropdown placeholder="Period" items={period} />
          </div>
        </div>

        <main>
          <Table />
        </main>
      </section>
    </div>
  );
};

export default page;
