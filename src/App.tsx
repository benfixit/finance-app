import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import DashBoard from "./page/Dashboard";
import Expenses from './page/Expenses';
import Budget from './page/Budget';
import ExpensesProvider from './store/ExpensesProvider';

const App = () => {
  return (
    <>
      <ExpensesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<DashBoard />}></Route>
              <Route path='/expenses' element={<Expenses />}></Route>
              <Route path='/budget' element={<Budget />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ExpensesProvider>
    </>
  )
}

export default App
