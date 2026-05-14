export default function NetworthCard({
  amount,
}) {

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl">
        Total Networth
      </h2>

      <p className="text-5xl font-bold text-green-600 mt-4">
        ₹{amount}
      </p>

    </div>
  );
}