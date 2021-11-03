import React, { useState } from 'react'
import ExpenseCard from './ExpenseCard'



function ExpensesTab() {

    const [data, setData] = useState([
        {
            id: 1,
            expense: "Coffee",
            amount: 150,
            name: "Kushal",
            visibility: true
        },

        {
            id: 2,
            expense: "Tea",
            amount: 100,
            name: "Shikha",
            visibility: true
        },

        {
            id: 3,
            expense: "Hotel",
            amount: 5000,
            name: "Sams",
            visibility: true

        },

        {
            id: 4,
            expense: "Hotel",
            amount: 5000,
            name: "Sams",
            visibility: true
        },

        {
            id: 5,
            expense: "Hotel",
            amount: 5000,
            name: "Sams",
            visibility: true
        },

        {
            id: 6,
            expense: "Hotel",
            amount: 5000,
            name: "Sams",
            visibility: true
        },

        {
            id: 7,
            expense: "Hotel",
            amount: 5000,
            name: "Sams",
            visibility: true
        },

        {
            id: 8,
            expense: "Hotel",
            amount: 5000,
            name: "Sams",
            visibility: true
        }
    ])

    const visibleData = data.filter(element => element.visibility === true)

    const expenseCards = visibleData.map(element => <ExpenseCard values={element} key={element.id} />)
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                {expenseCards}
            </div>
        </div>
    )
}

export default ExpensesTab
