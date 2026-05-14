"use client";

import Link from "next/link";

export default function SideBar() {

  return (

    <div className="w-64 h-screen bg-black text-white p-6">
      
      <h1 className="text-4xl font-bold mb-12">
        Dashboard
      </h1>





      <div className="flex flex-col gap-6 text-xl">

        <Link href="/dashboard/sip">
          SIP Dashboard
        </Link>





        <Link href="/dashboard/portofolio">
          Portofolio Dashboard
        </Link>





        <Link href="/dashboard/add-investor">
          Add Investorshb
        </Link>





        <Link href="/dashboard/create-sip">
          Create SIP
        </Link>

      </div>

    </div>
  );
}