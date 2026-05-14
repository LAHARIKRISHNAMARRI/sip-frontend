export default function TransactionTable({
  transactions,
}) {

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-2xl font-bold mb-5">
        Transaction History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">
              Amount
            </th>

            <th className="text-left py-3">
              NAV
            </th>

            <th className="text-left py-3">
              Units
            </th>

            <th className="text-left py-3">
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((item, index) => (

            <tr
              key={index}
              className="border-b"
            >

              <td className="py-3">
                ₹{item.transaction_amount}
              </td>

              <td>
                {item.nav}
              </td>

              <td>
                {item.units}
              </td>

              <td>
                {item.transaction_date}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}