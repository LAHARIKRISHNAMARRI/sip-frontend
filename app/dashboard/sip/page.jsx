"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";

export default function SIPDashboard() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {

    try {

      const res = await API.get(
        "/sips/1/transactions"
      );

      setTransactions(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        SIP Tracker Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5 mb-10">

        <div className="bg-white rounded-xl p-5 shadow">

          <h2 className="text-lg">
            Monthly SIP
          </h2>

          <p className="text-3xl font-bold mt-2">
            ₹15,000
          </p>

        </div>

        <div className="bg-white rounded-xl p-5 shadow">

          <h2 className="text-lg">
            Active SIPs
          </h2>

          <p className="text-3xl font-bold mt-2">
            4
          </p>

        </div>

        <div className="bg-white rounded-xl p-5 shadow">

          <h2 className="text-lg">
            Processed Transactions
          </h2>

          <p className="text-3xl font-bold mt-2">
            {transactions.length}
          </p>

        </div>

      </div>

      <div className="bg-white p-5 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Transaction History
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Amount
              </th>

              <th className="text-left py-3">
                NAV
              </th>

              <th className="text-left py-3">
                Units
              </th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((item, index) => (

              <tr
                key={index}
                className="border-b"
              >

                <td className="py-3">
                  ₹{item.transaction_amount}
                </td>

                <td>
                  {item.nav}
                </td>

                <td>
                  {item.units}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}