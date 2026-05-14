export default function FundCard({
  fund,
  nav,
}) {

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold">
        {fund}
      </h2>

      <p className="mt-3 text-lg">
        NAV : ₹{nav}
      </p>

    </div>
  );
}