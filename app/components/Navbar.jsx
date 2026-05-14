"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

  const handleLogout = () => {

    document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    router.push("/login");
  };

  return (

    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        SIP Tracker
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}