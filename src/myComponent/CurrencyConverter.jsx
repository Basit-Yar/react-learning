import { useState } from "react";
import InputBox from "./InputBox";


function CurrencyConverter() {

    let [amount, setAmount] = useState(0);

    return (

        <div>
            <h1>This is a currency converter component.</h1>
            <hr />
            <InputBox
                label="From"
                amount={amount}
                isAmountDisable={false}
                onAmountChange={(amt) => setAmount(amt)}
            />
            <div className="center">
                <button className="btn btn-info">Swap</button>
            </div>
            <InputBox
                label="To"
                amount={""}
                isAmountDisable={true}
            />
            <div className="center">
                <button className="btn btn-info col-4">Convert INR to USD</button>
            </div>
        </div>

    );
}

export default CurrencyConverter;