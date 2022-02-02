import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props){

    const [enteredTitle , setEnteredTitle ] = useState('');

    const titleChangeHandler  = (event) => {
        setEnteredTitle(event.target.value)
    }

    const [enteredAmount , setEnteredAmount] = useState('');

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }


    const [enteredDate , setEnteredDate] = useState('');

    const dateChangehandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount ,
            date: new Date(enteredDate)
        };
        props.onSubmitExpense(expenseData);

        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }


    return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min="1.0" step="1.0" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangehandler}/>
        </div>
    </div>
    <div className='new-expense__actions'>
    <button>Add Expense</button>
    </div>
    </form>
}

export default ExpenseForm