import React, { useState } from "react";
import styled from "styled-components";

export default function Expenses() {
    let actualDate = new Date();
    let dd = String(actualDate.getDate()).padStart(2, "0");
    let mm = String(actualDate.getMonth() + 1).padStart(2, "0");
    let yyyy = actualDate.getFullYear();

    const [expense, setExpense] = useState({
        concept: "",
        quantity: 0,
        category: "",
        subcategory: "",
        date: `${yyyy}-${mm}-${dd}`,
        workCheck: false,
        notComputable: false,
    });

    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;

        type === "checkbox"
            ? setExpense({
                  ...expense,
                  [name]: checked,
              })
            : setExpense({
                  ...expense,
                  [name]: value,
              });
    };

    const handleSubmit = () => {

    }

    return (
        <>
            <h1>Expenses</h1>
            <div className="input-grp">
                <label htmlFor="concept">
                    <span role="img" aria-label="concept">
                        🧾
                    </span>
                    Concept:
                </label>
                <input
                    type="text"
                    name="concept"
                    id="concept"
                    placeholder="Enter concept"
                    value={expense.concept}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className="input-grp">
                <label htmlFor="quantity">
                    <span role="img" aria-label="quantity">
                        💰
                    </span>
                    Quantity:
                </label>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="Enter quantity"
                    value={expense.quantity}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className="input-grp">
                <label htmlFor="category">
                    <span role="img" aria-label="category">
                        🏷
                    </span>
                    Category:
                </label>
                <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Enter category"
                    value={expense.category}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className="input-grp">
                <label htmlFor="subcategory">
                    <span role="img" aria-label="subcategory">
                        📌
                    </span>
                    Subcategory:
                </label>
                <input
                    type="text"
                    name="subcategory"
                    id="subcategory"
                    placeholder="Enter subcategory"
                    value={expense.subcategory}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className="input-grp">
                <label htmlFor="date">
                    <span role="img" aria-label="date">
                        📆
                    </span>
                    Date:
                </label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Enter date"
                    value={expense.date}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className="check-grp">
                <div className="check-container">
                    <input
                        type="checkbox"
                        name="workCheck"
                        id="workCheck"
                        checked={expense.workCheck}
                        onChange={(e) => handleChange(e)}
                    />
                    <div className="check"></div>
                </div>
                <label htmlFor="workCheck">Work Expense</label>
            </div>

            <div className="check-grp">
                <div className="check-container">
                    <input
                        type="checkbox"
                        name="notComputable"
                        id="notComputable"
                        checked={expense.notComputable}
                        onChange={(e) => handleChange(e)}
                    />
                    <div className="check"></div>
                </div>
                <label htmlFor="notComputable">Not Computable</label>
            </div>

            <input type="submit" value="Submit" />
        </>
    );
}
