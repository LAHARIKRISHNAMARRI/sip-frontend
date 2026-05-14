"use client";

import { useState } from "react";

export default function AddInvestor() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [mobile, setMobile] =
    useState("");





  const handleSubmit = async () => {

    try {

      const response = await fetch(
        "http://localhost:4000/api/investor/add",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            mobile,
          }),
        }
      );

      const data =
        await response.json();

      console.log(data);

      alert("Investor Added");

    } catch (error) {

      console.log(error);
    }
  };





  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Add Investor
      </h1>





      <div className="bg-white p-8 rounded-xl shadow w-[500px]">

        <input
          type="text"
          placeholder="Investor Name"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={(e) =>
            setName(e.target.value)
          }
        />





        <input
          type="email"
          placeholder="Investor Email"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />





        <input
          type="text"
          placeholder="Investor Mobile"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={(e) =>
            setMobile(e.target.value)
          }
        />





        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Add Investor
        </button>

      </div>

    </div>
  );
}