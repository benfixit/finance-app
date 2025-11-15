import { createContext, useContext, useState, type ReactNode } from "react";
import type { ExpenseItem } from "../typings";

type ExpensesContextType = {
    expenses: Array<ExpenseItem>
    saveExpenses: Function
}

const ExpensesContext = createContext<ExpensesContextType>({
    expenses: [],
    saveExpenses: () => []
});

const LOCAL_STORAGE_KEY = "expenses";

const ExpensesProvider = ({ children }: { children: ReactNode }) => {
    const [expenses, setExpenses] = useState<Array<ExpenseItem>>([]);

    const saveExpenses = (expenses: Array<ExpenseItem>): void => {
        const value = JSON.stringify(expenses);

        setExpenses(expenses);
        localStorage.setItem(LOCAL_STORAGE_KEY, value);
    }

    return (
        <ExpensesContext.Provider value={{ expenses, saveExpenses }}>
            {children}
        </ExpensesContext.Provider>
    );
}

export const useExpenses = (): ExpensesContextType => useContext(ExpensesContext);

export default ExpensesProvider;