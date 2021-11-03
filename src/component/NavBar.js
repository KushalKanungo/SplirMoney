import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    const [selected, setSelected] = useState({
        home: "selected",
        frnd: "",
        expense: ""
    })

    const addfrndClick = () => {
        setSelected({
            home: "",
            frnd: "selected",
            expense: ""
        })
    }

    const homeClick = () => {
        setSelected({
            home: "selected",
            frnd: "",
            expense: ""
        })
    }

    const expenseClick = () => {
        setSelected({
            home: "",
            frnd: "",
            expense: "selected"
        })
    }


    return (
        <div className="d-flex justify-content-center navdiv">
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <Link to="/" className={`links  ${selected.home}`} onClick={homeClick} >HOME</Link>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center ">
                            <Link to="/friends" className={`links  ${selected.frnd}`} onClick={addfrndClick} >FRIENDS</Link>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <Link to="/expense" className={`links  ${selected.expense}`} onClick={expenseClick} >EXPENSES</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
