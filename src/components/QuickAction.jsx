export default function QuickAction({ label }) {
  return (
    <button className="bg-white shadow rounded-xl p-4 hover:bg-blue-50 transition text-sm font-semibold">
      {label}
    </button>
  );
}
