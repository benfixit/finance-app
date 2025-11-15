import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import DashBoard from "./page/Dashboard";
import Expenses from './page/Expenses';
import Budget from './page/Budget';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<DashBoard />}></Route>
            <Route path='/expenses' element={<Expenses />}></Route>
            <Route path='/budget' element={<Budget />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
