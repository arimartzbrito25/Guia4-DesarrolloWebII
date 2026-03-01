import { useContext } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { BudgetStateContext } from '../context/BudgetContext'
import { AmountDisplay } from './AmountDisplay'

export const BudgetTracker = () => {
  const state = useContext(BudgetStateContext)
  const totalExpenses = state.expenses?.reduce((acc, el) => acc + el.amount, 0) ?? 0
  const remainingBudget = state.budget - totalExpenses
  const percentage = state.budget > 0 ? Math.round((totalExpenses / state.budget) * 100) : 0

  return (
    <div className="grid md:grid-cols-2 gap-5 items-center">
      <div className="flex justify-center w-50 mx-auto">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% Gastado`}
          styles={buildStyles({
            pathColor: percentage > 100 ? '#dc2626' : '#2563eb',
            textColor: '#1e293b',
            trailColor: '#e2e8f0',
          })}
        />
      </div>
      <div className="flex flex-col gap-8">
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  )
}
