import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";

const dummy = [{
  id:1,
  date:new Date(2022,2,5) ,
  title:'Something' ,
  amount:1000
},
{
  id:2,
  date:new Date(2022,2,5) ,
  title:'Something' ,
  amount:1000
},
{
  id:3,
  date:new Date(2022,2,5) ,
  title:'Something' ,
  amount:1000
}]



function App(props) {
  const [expense , setExpense]= useState(dummy)
   
  function newExpense(newExpenseData){
    setExpense((expense) =>{
      return [newExpenseData , ...expense]
    })
  
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onNewExpense={newExpense}/>
      <Expenses expenses={expense}/>
    </div>
  );
}

export default App;
