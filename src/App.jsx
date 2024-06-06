import Balance from "./components/Balance.jsx";
// import Graphic from "./components/Graphic.jsx";
import IncomeExpenses from "./components/IncomeExpenses.jsx";
import TransactionForm from "./components/Transactions/TransactionForm.jsx";
import TransactionList from "./components/Transactions/TransactionList.jsx";

import {GlobalProvider} from "./context/GlobalState.jsx";

const App = () => {
  return (
    <GlobalProvider>
       <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
     <div className="container mx-auto w-3/6">
     <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
        
        <div className="mr-5">
        <h1 className="text-4xl font-bold">Expense Tracker</h1>
        <IncomeExpenses/>
        <Balance/>
        <TransactionForm/>
        </div>
        <div className="flex flex-col  flex-1">
       {/* <Graphic/> */}
        <TransactionList/>
        </div>
        </div>
     </div>
       </div>
     
    </GlobalProvider>
  )
}

export default App