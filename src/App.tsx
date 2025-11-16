import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import DashBoard from "./page/Dashboard";
import Expenses from './page/Expenses';
import Budget from './page/Budget';
import ExpensesProvider from './store/ExpensesProvider';
import BudgetProvider from './store/BudgetProvider';

const App = () => {
  return (
    <>
      <ExpensesProvider>
        <BudgetProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<DashBoard />}></Route>
                <Route path='/expenses' element={<Expenses />}></Route>
                <Route path='/budget' element={<Budget />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </BudgetProvider>
      </ExpensesProvider>
    </>
  )
}

export default App
