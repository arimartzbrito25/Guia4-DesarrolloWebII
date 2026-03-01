const getInitialBudget = () => {
  const stored = localStorage.getItem('budget')
  return stored ? Number(stored) : 0
}

const getInitialExpenses = () => {
  try {
    const stored = localStorage.getItem('expenses')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export const initialState = {
  budget: getInitialBudget(),
  expenses: getInitialExpenses(),
  modal: false,
  editingId: '',
  currentCategory: '',
}

export const budgetReducer = (state, action) => {
  switch (action.type) {
    case "add-budget":
      return { ...state, budget: action.payload.budget }
    case "show-modal":
      return { ...state, modal: true }
    case "close-modal":
      return { ...state, modal: false, editingId: '' }
    case "get-expense-by-id":
      return { ...state, editingId: action.payload.id, modal: true }
    case "update-expense":
      return {
        ...state,
        expenses: state.expenses.map((e) =>
          e.id === action.payload.expense.id ? action.payload.expense : e
        ),
        modal: false,
        editingId: '',
      }
    case "add-expense":
      return {
        ...state,
        expenses: [...state.expenses, { ...action.payload.expense, id: new Date().getTime() }],
        modal: false,
      }
    case "remove-expense":
      return {
        ...state,
        expenses: state.expenses.filter((e) => e.id !== action.payload.id),
      }
    case "add-filter-category":
      return { ...state, currentCategory: action.payload.category }
    case "reset-app":   // 2. Boton para resetear la app, elimina el presupuesto y los gastos
      return {
        budget: 0,
        expenses: [],
        modal: false,
        editingId: '',
        currentCategory: '',
      }
    default:
      return state
  }
}