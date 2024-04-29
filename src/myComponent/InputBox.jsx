
import { useState } from "react"
import "../App.css"

export default function InputBox({
    label,
    isAmountDisable,
    amount,
    onAmountChange,
    onCurrencyChange
}) {

    return (
        <div className="w-100 p-2 center">
            <div className="col-6 center border border-2 border-info p-4">
                <div className="col-6 d-flex flex-column align-items-start ">
                    <label htmlFor="">
                        <span>{label}</span>
                    </label>
                    <input type="number"
                        value={amount}
                        disabled={isAmountDisable}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className="col-6 d-flex flex-column align-items-end">
                    <label htmlFor="">
                        <span>Currency Type</span>
                    </label>
                    <select id="">
                        <option value="">usd</option>
                        <option value="">inr</option>
                    </select>
                </div>
            </div>
        </div>
    )
}