export default function SaleForm() {
  return (
    <form className="bg-white p-6 rounded-xl shadow grid gap-4 md:grid-cols-2">
      <select className="border p-2 rounded">
        <option>Bar</option>
        <option>Car Wash</option>
      </select>

      <input className="border p-2 rounded" placeholder="Item / Service" />
      <input
        type="number"
        className="border p-2 rounded"
        placeholder="Quantity"
      />
      <input
        type="number"
        className="border p-2 rounded"
        placeholder="Amount"
      />

      <button className="bg-blue-600 text-white py-2 rounded md:col-span-2">
        Add Sale
      </button>
    </form>
  );
}
