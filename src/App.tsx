import './App.css'
import Form from './components/Form'
import Table from './components/Table'
import ExpensesProvider from './store/ExpensesProvider'

function App() {

  return (
    <>
      <ExpensesProvider>
        <Form />
        <Table />
      </ExpensesProvider>
    </>
  )
}

export default App
