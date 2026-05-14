export default function HoldingTable({
  holdings,
}) {

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-2xl font-bold mb-5">
        Holdings Summary
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">
              Fund
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

          {holdings.map((item, index) => (

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
  );
}