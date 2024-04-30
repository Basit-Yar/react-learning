import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../customHook/useCurrencyInfo";


function CurrencyConverter() {

    let [amount, setAmount] = useState(0);
    let [fromCurrency, setFromCurrency] = useState("usd");
    let [toCurrency, setToCurrency] = useState("inr");
    let [convertedAmount, setConvertedAmount] = useState("0");

    let data = useCurrencyInfo(fromCurrency);
    // console.log(data)
    let options = Object.keys(data);


    let amountConversion = () => {
        setConvertedAmount(amount * data[toCurrency]);
    }

    return (

        <div>
            <h1>This is a currency converter component.</h1>
            <hr />
            <InputBox
                label="From"
                amount={amount}
                isAmountDisable={false}
                onAmountChange={(amt) => setAmount(amt)}
                onCurrencyChange={(currency) => {
                    setFromCurrency(currency)
                    setConvertedAmount("")
                }}
                currencyOption={options}
                currencyValue={fromCurrency}
            />
            <div className="center">
                <button className="btn btn-info" onClick={() => alert("Swapping feature has not been implemented yet !")}>Swap</button>
            </div>
            <InputBox
                label="To"
                amount={convertedAmount}
                isAmountDisable={true}
                onCurrencyChange={(currency) => {
                    setToCurrency(currency)
                    setConvertedAmount("")
                }}
                currencyOption={options}
                currencyValue={toCurrency}
            />
            <div className="center">
                <button
                    className="btn btn-info col-4"
                    onClick={amountConversion}
                >
                    Convert {fromCurrency} to {toCurrency}
                </button>
            </div>
        </div>

    );
}

export default CurrencyConverter;