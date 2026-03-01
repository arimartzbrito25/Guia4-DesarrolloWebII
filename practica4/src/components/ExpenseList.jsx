import { useContext } from 'react'
import { SwipeableList } from 'react-swipeable-list'
import { BudgetStateContext } from '../context/BudgetContext'
import { ExpenseDetails } from './ExpenseDetails'

export const ExpenseList = () => {
  const state = useContext(BudgetStateContext)
  const allExpenses = state.expenses || []
  const filteredExpenses = state.currentCategory
    ? allExpenses.filter((e) => e.category === state.currentCategory)
    : allExpenses

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-black text-slate-800 mb-5">Gastos registrados</h2>
      {filteredExpenses.length === 0 ? (
        <p className="text-slate-500 text-center py-6">No hay gastos aún</p>
      ) : (
        <SwipeableList>
          {filteredExpenses.map((expense) => (
            <ExpenseDetails key={expense.id} expense={expense} />
          ))}
        </SwipeableList>
      )}
    </div>
  )
}
