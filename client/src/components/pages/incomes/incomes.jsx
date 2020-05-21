import React, { useState } from "react";

import styled from "styled-components";

export default function Incomes() {
    let actualDate = new Date();
    let dd = String(actualDate.getDate()).padStart(2, "0");
    let mm = String(actualDate.getMonth() + 1).padStart(2, "0");
    let yyyy = actualDate.getFullYear();

    const [income, setIncome] = useState({
        concept: "",
        quantity: 0,
        category: "",
        subcategory: "",
        date: `${yyyy}-${mm}-${dd}`,
        notComputable: false,
    });

    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;

        type === "checkbox"
            ? setIncome({
                  ...income,
                  [name]: checked,
              })
            : setIncome({
                  ...income,
                  [name]: value,
              });
    };

    return (
        <>
            <h1>Incomes</h1>
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
                    value={income.concept}
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
                    value={income.quantity}
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
                    value={income.category}
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
                    value={income.subcategory}
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
                    value={income.date}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className="check-grp">
                <div className="check-container">
                    <input
                        type="checkbox"
                        name="notComputable"
                        id="notComputable"
                        checked={income.notComputable}
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
