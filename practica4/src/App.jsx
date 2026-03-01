import { BudgetForm } from './components/BudgetForm'
import { BudgetTracker } from './components/BudgetTracker'
import { FilterByCategory } from './components/FilterByCategory'
import { ExpenseList } from './components/ExpenseList'
import ExpenseModal from './components/ExpenseModal'
import { useContext, useEffect } from 'react'
import { BudgetStateContext, BudgetDispatchContext } from './context/BudgetContext'

function App() {
  const state = useContext(BudgetStateContext)
  const dispatch = useContext(BudgetDispatchContext)
  const isValidBudget = state.budget > 0

  const handleResetApp = () => {
    dispatch({ type: 'reset-app' })
  }

  useEffect(() => {
    localStorage.setItem('budget', state.budget)
  }, [state.budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state.expenses])

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72 relative">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de gastos
        </h1>
        {isValidBudget && (
          <button
            type="button"
            onClick={handleResetApp}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg uppercase text-sm"
          >
            Resetear App
          </button>
        )}
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  )
}

export default App