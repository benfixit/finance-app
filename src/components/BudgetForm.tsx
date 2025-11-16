import { useState } from "react";
import { v4 } from "uuid";
import { type BudgetItem } from "../typings";
import { useBudget } from "../store/BudgetProvider";
import styles from "./BudgetForm.module.css";

const defaultFormData = {
    id: v4(),
    amount: 0,
    category: "",
    date: ""
};

const BudgetForm = () => {
    const { budget, saveBudget } = useBudget();

    const [formData, setFormData] = useState<BudgetItem>(defaultFormData);

    //@ts-ignore
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({...formData, [name]: value});
    }

    //@ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();

        saveBudget([...budget, formData]);

        clearForm();
    }
    
    const clearForm = () => {
        setFormData(defaultFormData);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value={"Food"}>Food</option>
                <option value={"Utilities"}>Utilities</option>
                <option value={"Transportation"}>Transportation</option>
            </select>
            <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} />
            <input name="date" type="date" value={formData.date} onChange={handleChange} />
            <button>Add Budget</button>
        </form>
    );
}

export default BudgetForm;