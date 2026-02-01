export default function ExpenseForm() {
  return (
    <form className="bg-white p-6 rounded-xl shadow grid gap-4">
      <input className="border p-2 rounded" placeholder="Expense name" />
      <input
        type="number"
        className="border p-2 rounded"
        placeholder="Amount"
      />
      <button className="bg-red-600 text-white py-2 rounded">
        Add Expense
      </button>
    </form>
  );
}
