"use client";

import { useEffect, useState }
from "react";

import API from "../../services/api";

export default function PortfolioPage() {

  const [holdings,
    setHoldings] = useState([]);

  const [networth,
    setNetworth] = useState(0);





  useEffect(() => {

    fetchHoldings();

    fetchNetworth();

  }, []);





  const fetchNetworth =
    async () => {

    try {

      const response =
        await API.get(
          "/investor/6789543210/networth"
        );

      console.log(response.data);





      setNetworth(
        response.data.NAV
      );

    } catch (error) {

      console.log(error);
    }
  };





  const fetchHoldings =
    async () => {

    try {

      const response =
        await API.get(
          "/investor/INV101/holdings"
        );

      console.log(response.data);

      setHoldings(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };





  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Portofolio Dashboard
      </h1>





      <div className="bg-white rounded-xl shadow p-6 mb-8">

        <h2 className="text-2xl">
          Total Net Worth
        </h2>

        <p className="text-5xl font-bold text-green-600 mt-4">

          ₹{networth}

        </p>

      </div>





      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-2xl font-bold mb-5">
          Holdings Summary
        </h2>





        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Fund Name
              </th>

              <th className="text-left py-3">
                Units
              </th>

              <th className="text-left py-3">
                NAV
              </th>

              <th className="text-left py-3">
                Current Value
              </th>

            </tr>

          </thead>





          <tbody>

            {holdings.map(
              (item, index) => (

              <tr
                key={index}
                className="border-b"
              >

                <td className="py-3">
                  {item.fund_name}
                </td>

                <td>
                  {item.total_units}
                </td>

                <td>
                  ₹{item.nav}
                </td>

                <td>
                  ₹{item.current_value}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}