export const AmountDisplay = ({ label, amount }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm font-bold uppercase text-slate-500">{label}</p>
      <p className="text-2xl font-black text-blue-600">${amount}</p>
    </div>
  )
}
