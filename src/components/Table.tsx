import { useExpenses } from "../store/ExpensesProvider";

const Table = () => {
    const { expenses } = useExpenses();
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => {
                    return (
                        <tr key={expense.id}>
                            <td>{expense.title}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.category}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{}</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default Table;