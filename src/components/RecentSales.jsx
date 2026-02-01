export default function RecentSales() {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <h3 className="font-bold mb-4">Recent Sales</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500">
          <tr>
            <th className="text-left">Type</th>
            <th className="text-left">Item</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {[
            { type: "Bar", item: "Heineken", amount: "₦2,500" },
            { type: "Car Wash", item: "SUV Premium", amount: "₦6,000" },
            { type: "Bar", item: "Whiskey", amount: "₦8,000" },
          ].map((s, i) => (
            <tr key={i} className="border-t">
              <td className="text-[1.1rem]">{s.type}</td>
              <td className="text-[1.1rem]">{s.item}</td>
              <td className="text-right text-[1.1rem] font-semibold">
                {s.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
