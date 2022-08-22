import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";

import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

  const App=()=>{
    return(
      <AppProvider>
         <div className='container'>
      <h1 className='mt-3'>My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget/>
        </div>
        <div className='col-sm'>
          <Remaining/>
        </div>
        <div className='col-sm'>
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList/>
        </div>
      </div>
      <h3 className='mt-3'>Add Express</h3>
      <div className='mt-3'>
        <div className='col-sm'>
          <AddExpenseForm/>
        </div>
      </div>
      </div>
      </AppProvider>
    
    )
  }
  export default App;
































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
