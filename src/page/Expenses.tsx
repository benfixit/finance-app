// @ts-nocheck
import { Card } from '../components/Card';
import ExpenseForm from '../components/ExpenseForm'
import Table from '../components/Table'
import ExpensesProvider, { useExpenses } from '../store/ExpensesProvider'
import styles from "./Expenses.module.css";

const columns = [
  { key: 'title', value: 'Title' },
  { key: 'amount', value: 'Amount' },
  { key: 'category', value: 'Category' },
  { key: 'date', value: 'Date' },
  { key: 'action', value: 'Action' }
];

const Expenses = () => {
  const { expenses } = useExpenses();

  return (
    <section className={styles.expenses}>
      <Card title='Add New Expense'>
        <ExpenseForm />
      </Card>
      <Card title='Expenses Overview'>
        <Table columns={columns} rows={expenses} />
      </Card>
    </section>
  )
}

export default Expenses
