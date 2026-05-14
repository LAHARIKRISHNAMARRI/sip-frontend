export default function SIPCard({
  title,
  value,
}) {

  return (

    <div className="bg-white rounded-xl p-5 shadow">

      <h2 className="text-lg">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}