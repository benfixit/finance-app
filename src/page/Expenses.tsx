import Form from '../components/Form'
import Table from '../components/Table'
import ExpensesProvider from '../store/ExpensesProvider'

const Expenses = () => {

  return (
    <>
      <ExpensesProvider>
        <Form />
        <Table />
      </ExpensesProvider>
    </>
  )
}

export default Expenses
