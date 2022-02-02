import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'



function Expenses(props){

    const [ filteredYear , setFilteredYear] = useState('2020')
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter( expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No Expenses for this year</p>
    
    if(filteredExpenses.length > 0){
     expensesContent = filteredExpenses.map( (expense) =>(
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
    ))  
    }


    return(
        <Card className='expenses'>
        <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expensesContent}
        </Card>
    ) 
}

export default Expenses