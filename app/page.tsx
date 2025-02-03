import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import Dropdown from "./Molecules/Dropdown";
import { LuMoveUp } from "react-icons/lu";
import { LuMoveDown } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosFlash } from "react-icons/io";
import Chart from "./organizims/Chart";
import Image from "next/image";

export default function Home() {
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
    <section className="p-4 flex flex-col gap-4 ">
      <div className="text-xl border- border-b-2 pb-4 font-serif text-primary flex flex-row  justify-between  w-full">
        <p>DASHBOARD</p>
        <div className="relative">
          {/* Notification Icon */}
          <IoIosNotifications className="text-white text-3xl bg-primary rounded-full p-2" />

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            3 {/* Replace with dynamic notification count */}
          </div>
        </div>
      </div>

      {/* account merrites */}
      <main className="flex flex-col gap-2 mt-3">
        <p className="font-bold text-sm text-primary">Account Metrics</p>

        <div className="grid grid-cols-4 gap-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex col-span-1 flex-col bg-primary gap-2 p-4 rounded-xl pb-4">
            <p className="text-gray-200 text-xs">Volume Transacted Today</p>
            <p className="text-2xl text-secondary font-bold">₦45,823</p>
          </div>

          <div className="flex col-span-1 flex-col bg-white gap-2 p-4 rounded-xl pb-4 border shadow-sm">
            <p className=" text-xs text-gray">Card Transactions</p>
            <p className="text-2xl text-primary font-bold">$13,000</p>
          </div>

          <div className="flex col-span-1 flex-col bg-white gap-2 p-4 rounded-xl pb-4 border shadow-sm">
            <p className="text-gray text-xs">Number Of Active Users</p>
            <p className="text-2xl text-primary font-bold">₦45,823</p>
          </div>

          <div className="flex col-span-1 flex-col bg-white justify-between p-4 rounded-xl pb-4 border shadow-sm">
            <div className="flex flex-col gap-2">
              <p className="text-gray text-xs ">Pending Transactions</p>
              <p className="text-2xl text-[#F3A218] font-bold">95</p>
            </div>
            <Link href="" className="text-end text-xs">
              View Transactions
            </Link>
          </div>
        </div>
      </main>

      {/* transaction chart */}
      <main className=" grid grid-cols-6 gap-4 ">
        <div className="flex col-span-4 flex-col  items-center justify-between">
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-sm font-bold text-primary">Transaction Volume</p>
            <div className="flex flex-row gap-3">
              <Dropdown placeholder="All Currencies" items={currencies} />
              <Dropdown placeholder="Period" items={period} />
            </div>
          </div>

          <Chart />
        </div>

        {/* second part of the screen transaction volume */}
        <div className="col-span-2 mt-3 ">
          <div className="flex flex-row justify-between">
            <p className="text-sm font-bold text-primary">Resent Transaction</p>
            <p className="text-sm flex items-center gap-2">
              see all <IoIosArrowForward />
            </p>
          </div>
          {/* payment details  */}
          <main className="p-4 flex flex-col gap-4 rounded-lg bg-white mt-4 ">
            <div className="flex flex-row  justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-100">
                  <LuMoveUp className="text-red-700" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Mamudu Jeffrey</p>
                  <p className="text-xs text-gray">Recipient: Angela Monet</p>
                  <p className="text-xs text-gray">Kuda Bank Today, 4:15PM </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-sm">- ₦94,200.00</h1>
              </div>
            </div>

            <div className="flex flex-row  justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-100">
                  <LuMoveUp className="text-red-700" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Mamudu Jeffrey</p>
                  <p className="text-xs text-gray">Recipient: Angela Monet</p>
                  <p className="text-xs text-gray">Kuda Bank Today, 4:15PM </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-sm">- ₦94,200.00</h1>
              </div>
            </div>

            <div className="flex flex-row  justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                  <LuMoveDown className="text-green-700" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Mamudu Jeffrey</p>
                  <p className="text-xs text-gray">Recipient: Angela Monet</p>
                  <p className="text-xs text-gray">Kuda Bank Today, 4:15PM </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-sm">- ₦94,200.00</h1>
              </div>
            </div>

            <div className="flex flex-row  justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                  <LuMoveDown className="text-green-700" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Mamudu Jeffrey</p>
                  <p className="text-xs text-gray">Recipient: Angela Monet</p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-sm">- ₦94,200.00</h1>
              </div>
            </div>

            <div className="flex flex-row  justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                  <LuMoveDown className="text-green-700" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Mamudu Jeffrey</p>
                  <p className="text-xs text-gray">Recipient: Angela Monet</p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-sm">- ₦94,200.00</h1>
              </div>
            </div>

            <div className="flex flex-row  justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-100">
                  <LuMoveUp className="text-red-700" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Mamudu Jeffrey</p>
                  <p className="text-xs text-gray">Recipient: Angela Monet</p>
                  <p className="text-xs text-gray">Kuda Bank Today, 4:15PM </p>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-sm">- ₦94,200.00</h1>
              </div>
            </div>
          </main>
        </div>
      </main>

      {/* last part active admins  */}
      <main className="grid grid-cols-6 gap-4 ">
        <div className="col-span-4">
          <div className="flex flex-row justify-between">
            <p className="text-sm font-bold text-primary">Active Admin</p>
            <p className="text-sm flex items-center gap-2">
              see all <IoIosArrowForward />
            </p>
          </div>
          {/* admins */}
          <div className=" bg-white p-4 flex flex-row items-center rounded-lg gap-3 my-4 py-4">
            <div className="flex flex-col items-center gap-2 ">
              <div className="bg-yellow-200 rounded-full">
                <Image
                  src="/girl.png"
                  height={40}
                  width={40}
                  alt="User"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-xs font-bold">Ariana Bush</p>
                <p className="text-xs text-gray">@ariana007</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="bg-gray-200 rounded-full">
                <p className="font-bold text- p-2"> MN </p>
              </div>
              <div>
                <p className="text-xs font-bold">Madelyn Ma...</p>
                <p className="text-xs text-gray">@ariana007</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="bg-gray-200 rounded-full">
                <p className="font-bold text- p-2"> ZS</p>
              </div>
              <div>
                <p className="text-xs font-bold">Zain Siphron</p>
                <p className="text-xs text-gray">@Siphron</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="bg-yellow-200 rounded-full">
                <Image
                  src="/girl.png"
                  height={40}
                  width={40}
                  alt="User"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-xs font-bold">Ariana Bush</p>
                <p className="text-xs text-gray">@Ariana</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="bg-gray-200 rounded-full">
                <p className="font-bold text- p-2"> MS</p>
              </div>
              <div>
                <p className="text-xs font-bold">Martin Stan..</p>
                <p className="text-xs text-gray">@Martin</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="bg-yellow-200 rounded-full">
                <div className="bg-gray-200 rounded-full">
                  <p className="font-bold text- p-2"> AC</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold">Aliya Cornrad</p>
                <p className="text-xs text-gray">@Aliya</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <div className="bg-yellow-200 rounded-full">
                <div className="bg-gray-200 rounded-full">
                  <p className="font-bold text- p-2"> AC</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold">Jakob West..</p>
                <p className="text-xs text-gray">@Jakob</p>
              </div>
            </div>
          </div>
        </div>
        {/* Rates and us */}
        <div className=" col-span-2 flex flex-col gap-3 my-2">
          <div className="flex flex-row justify-between">
            <div className=" text-sm flex flex-row items-center gap-2">
              <IoIosFlash className="text-orange-400" />
              Rates
            </div>
            <p className="text-sm flex items-center gap-2">
              see all <IoIosArrowForward />
            </p>
          </div>

          <div className="bg-white p-4 pb-16 rounded-lg">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 items-center">
                <div className="rounded-full overflow-hidden w-[30px] h-[30px]">
                  <Image
                    src={"/usa.png"}
                    alt="United States Flag"
                    width={30}
                    height={20}
                    className="object-cover w-full h-full" // Ensure the image covers the circular area
                  />
                </div>
                <p className="text-xs text-gray">United States Dollar</p>
              </div>
              <p className="text-sm text-gray">$1=₦1600</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
