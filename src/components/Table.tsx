//@ts-nocheck
import type React from "react";
import styles from "./Table.module.css";

export type TableProps = {
    rows: Array<Record<string, string>>;
    columns: Array<{key: string, value: string}>;
}

const Table: React.FC<TableProps> = (props) => {
    const { columns, rows } = props;
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key}>{column.value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => {
                    return (
                        <tr key={row.id}>
                            {Object.keys(row).filter(item => item !== 'id').map((item, index) => (
                                <td key={index}>{row[`${item}`]}</td>
                            ))}
                            <td>
                                 <button>Edit</button>
                                 <button>Delete</button>
                             </td>
                        </tr>
                    );
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td><strong>Total</strong></td>
                    {/* <td>{}</td> */}
                </tr>
            </tfoot>
        </table>
    );
}

export default Table;

// import { useExpenses } from "../store/ExpensesProvider";
// import styles from "./Table.module.css";

// const Table = () => {
//     const { expenses } = useExpenses();
//     return (
//         <table className={styles.table}>
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Amount</th>
//                     <th>Category</th>
//                     <th>Date</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {expenses.map((expense) => {
//                     return (
//                         <tr key={expense.id}>
//                             <td>{expense.title}</td>
//                             <td>{expense.amount}</td>
//                             <td>{expense.category}</td>
//                             <td>{expense.date}</td>
//                             <td>
//                                 <button>Edit</button>
//                                 <button>Delete</button>
//                             </td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//             <tfoot>
//                 <tr>
//                     <td><strong>Total</strong></td>
//                     <td>{}</td>
//                 </tr>
//             </tfoot>
//         </table>
//     );
// }

// export default Table;