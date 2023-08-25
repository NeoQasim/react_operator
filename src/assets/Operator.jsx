// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./styles.css"

const Operator = () => {
    const [count, setcount] = useState(0)

    return (
        <>
            <div className="container text-center">
                <h1  className={`display-2  ${count == 0 ? "yellow" : ""}    ${count > 0 ? "text-success" : ""} ${count < 0 ? "text-danger" : ""} `}>{count}</h1>
            </div>
            <div className="container text-center">
                <button onClick={() => (setcount(count + 1))} className="btn mx-2 btn-success">increase</button>
                <button onClick={() => (setcount(0))} className="btn mx-2 btn-warning">reset</button>
                <button onClick={() => (setcount(count - 1))} className="btn mx-2 btn-danger">decrease</button>
            </div>
        </>
    )
}

export default Operator