import { useContext } from 'react'
import { BudgetDispatchContext, BudgetStateContext } from '../context/BudgetContext'
import { categories } from '../data/categories'

export const FilterByCategory = () => {
  const dispatch = useContext(BudgetDispatchContext)
  const state = useContext(BudgetStateContext)

  const handleChange = (e) => {
    dispatch({ type: 'add-filter-category', payload: { category: e.target.value } })
  }

  return (
    <div className="mb-10">
      <label htmlFor="categoryFilter" className="text-xl font-bold text-slate-800 block mb-2">
        Filtrar gastos por categoría
      </label>
      <select
        id="categoryFilter"
        className="bg-slate-100 p-2 w-full md:w-auto"
        value={state.currentCategory ?? ''}
        onChange={handleChange}
      >
        <option value="">-- Todas las categorías --</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}
