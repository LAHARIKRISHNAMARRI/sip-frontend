"use client";

import { useState } from "react";

import { useRouter }
from "next/navigation";

export default function LoginPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const router = useRouter();





  const handleLogin = async () => {

    try {

     const response = await fetch(
  "http://localhost:4000/api/investor/login",
  {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json",
    },

    credentials: "include",

    body: JSON.stringify({
      email,
      password,
    }),
  }
);





      const data =
        await response.json();

      console.log(data);





      if (response.ok) {

        // STORE TOKEN

        document.cookie =
          `token=${data.token}; path=/`;





        // REDIRECT

        router.push(
          "/dashboard/sip"
        );

      } else {

        alert(data.message);
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };





  return (

    <div className="h-screen flex justify-center items-center">

      <div className="bg-white p-10 rounded-xl shadow w-[400px]">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Login
        </h1>





        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />





        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />





        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Login
        </button>

      </div>

    </div>
  );
}