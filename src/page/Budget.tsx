import { Card } from "../components/Card";
import styles from "./Budget.module.css";


const Budget = () => {

  return (
    <section className={styles.budget}>
      <Card title="Pie Chart">
        <p>Here we go</p>
      </Card>
      <Card title="Table">
        <p>Here we go</p>
      </Card>
    </section>
  )
}

export default Budget
