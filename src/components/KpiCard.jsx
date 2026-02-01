export function KpiCard({ title, value, subtitle, color }) {
  return (
    <div className={`rounded-2xl p-5 text-white shadow-lg ${color}`}>
      <p className="text-sm opacity-90">{title}</p>
      <h2 className="text-3xl font-bold mt-1">{value}</h2>
      <p className="text-xs mt-2 opacity-80">{subtitle}</p>
    </div>
  );
}
