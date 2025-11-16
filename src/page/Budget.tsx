// @ts-nocheck
import { Card } from "../components/Card";
import Table from "../components/Table";
import BudgetForm from "../components/BudgetForm";
import { useBudget } from "../store/BudgetProvider";
import styles from "./Budget.module.css";

const columns = [
  { key: 'amount', value: 'Amount' },
  { key: 'category', value: 'Category' },
  { key: 'date', value: 'Date' },
  { key: 'action', value: 'Action' }
];


const Budget = () => {
  const { budget } = useBudget();

  return (
    <section className={styles.budget}>
      <Card title="Add New Budget">
        <BudgetForm />
      </Card>
      <Card title="Budget Overview">
        <Table rows={budget} columns={columns} />
      </Card>
    </section>
  )
}

export default Budget
