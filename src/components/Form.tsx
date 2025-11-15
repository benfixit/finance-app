import { useState } from "react";
import { v4 } from "uuid";
import { type ExpenseItem } from "../typings";
import { useExpenses } from "../store/ExpensesProvider";

const defaultFormData = {
    id: v4(),
    title: "",
    amount: 0,
    category: "",
    date: ""
};

const Form = () => {
    const { expenses, saveExpenses } = useExpenses();

    const [formData, setFormData] = useState<ExpenseItem>(defaultFormData);

    //@ts-ignore
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({...formData, [name]: value});
    }

    //@ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();

        saveExpenses([...expenses, formData]);

        clearForm();
    }
    
    const clearForm = () => {
        setFormData(defaultFormData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="Expense Title" value={formData.title} onChange={handleChange} />
            <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} />
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value={"Food"}>Food</option>
                <option value={"Utilities"}>Utilities</option>
                <option value={"Transportation"}>Transportation</option>
            </select>
            <input name="date" type="date" value={formData.date} onChange={handleChange} />
            <button>Add Expense</button>
        </form>
    );
}

export default Form;