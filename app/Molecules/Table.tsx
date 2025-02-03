import React from "react";
import { LuMoveUp } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuMoveDown } from "react-icons/lu";

const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-200 rounded-xl ">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Transaction ID
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Account Number/Bank
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Bank
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Payment Type
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Currency
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Payment Method
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border-b">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-green-100">
                    <LuMoveDown className="text-geen-700 " />
                  </div>
                  <p className="text-xs">Credit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-green-100">
                    <LuMoveDown className="text-geen-700 " />
                  </div>
                  <p className="text-xs">Credit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>
            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-red-100">
                    <LuMoveUp className="text-red-700 " />
                  </div>
                  <p className="text-xs">Debit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-orange-200 text-center text-orange-600 p-1 rounded-full text-sx">
                  Pending
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-red-100">
                    <LuMoveUp className="text-red-700 " />
                  </div>
                  <p className="text-xs">Debit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-green-100">
                    <LuMoveDown className="text-geen-700 " />
                  </div>
                  <p className="text-xs">Credit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-red-100">
                    <LuMoveUp className="text-red-700 " />
                  </div>
                  <p className="text-xs">Debit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-green-100">
                    <LuMoveDown className="text-geen-700 " />
                  </div>
                  <p className="text-xs">Credit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-green-100">
                    <LuMoveDown className="text-geen-700 " />
                  </div>
                  <p className="text-xs">Credit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-green-100">
                    <LuMoveDown className="text-geen-700 " />
                  </div>
                  <p className="text-xs">Credit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-green-100">
                    <LuMoveDown className="text-geen-700 " />
                  </div>
                  <p className="text-xs">Credit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-green-200 text-green-600 p-1 rounded-full text-sx">
                  Successful
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Row 1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                TXN010
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                1234567890
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Apr 12, 2023 | 09:32AM
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                Kuda Bank
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8 h-8 rounded-full flex gap-3 items-center justify-center bg-green-100">
                    <LuMoveDown className="text-geen-700 " />
                  </div>
                  <p className="text-xs">Credit</p>
                </div>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">NGN</td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                text Transfer
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b ">
                <p className="bg-orange-200 text-center text-orange-600 p-1 rounded-full text-sx">
                  pending
                </p>
              </td>
              <td className="px-4 py-2 text-xs text-gray-700 border-b">
                ₦200,000.00
              </td>
              <td className="px-4 py- text-xs text-gray-700 border-b">
                <div className="bolder-2 border  p-1 px-0 items-center flex justify-center border-gray-100 rounded-md">
                  <BsThreeDotsVertical className="text-sm" />
                </div>
              </td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
