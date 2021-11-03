import React from 'react'

function ExpenseCard(props) {


    const deleteCard = (id) => {
        props.deleteCard(id)
    }

    return (


        <div className="expense-card col-10 col-sm-5 col-md-4 col-lg-3 my-2 mx-2">
            <div className="container">
                <label className="py-1" htmlFor="Expense">{props.values.expense}</label>
                <br />
                <label className="py-1" htmlFor="Money">₹{props.values.amount}</label>
                <br />
                <label className="py-1" htmlFor="By">Paid by {props.values.name}</label>
            </div>
            <button type="button" className="delete-card" onClick={() => { deleteCard(props.values.id) }}></button>
        </div>

    )
}

export default ExpenseCard
