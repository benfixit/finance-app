import { createContext, useContext, useState, type ReactNode } from "react";
import type { BudgetItem } from "../typings";

type BudgetContextType = {
    budget: Array<BudgetItem>
    saveBudget: Function
}

const BudgetContext = createContext<BudgetContextType>({
    budget: [],
    saveBudget: () => []
});

const LOCAL_STORAGE_KEY = "budget";

const BudgetProvider = ({ children }: { children: ReactNode }) => {
    const [budget, setBudget] = useState<Array<BudgetItem>>([]);

    const saveBudget = (budget: Array<BudgetItem>): void => {
        const value = JSON.stringify(budget);

        setBudget(budget);
        localStorage.setItem(LOCAL_STORAGE_KEY, value);
    }

    return (
        <BudgetContext.Provider value={{ budget, saveBudget }}>
            {children}
        </BudgetContext.Provider>
    );
}

export const useBudget = (): BudgetContextType => useContext(BudgetContext);

export default BudgetProvider;