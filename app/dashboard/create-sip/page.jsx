"use client";

import { useState } from "react";

export default function CreateSIP() {

  const [amount, setAmount] =
    useState("");

  const [fund, setFund] =
    useState("");





  const handleCreateSIP =
    async () => {

    try {

      const response = await fetch(
        "http://localhost:4000/api/sips/create",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            amount,
            fund,
          }),
        }
      );

      const data =
        await response.json();

      console.log(data);

      alert("SIP Created");

    } catch (error) {

      console.log(error);
    }
  };





  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Create SIP
      </h1>





      <div className="bg-white p-8 rounded-xl shadow w-[500px]">

        <input
          type="text"
          placeholder="Fund Name"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={(e) =>
            setFund(e.target.value)
          }
        />





        <input
          type="number"
          placeholder="SIP Amount"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />





        <button
          onClick={handleCreateSIP}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Create SIP
        </button>

      </div>

    </div>
  );
}