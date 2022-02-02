import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const submitExpenseHandler = (newExpense)=>{
        const expense = {
            ...newExpense,
            id:Math.random().toString()
        };
        props.onNewExpense(expense)
    }

return <div className='new-expense'>
    
        <ExpenseForm onSubmitExpense={submitExpenseHandler}/>
    
    </div>
}

export default NewExpense;