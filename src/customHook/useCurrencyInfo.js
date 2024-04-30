import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {

    let [data, setData] = useState({});

    useEffect(() => {

        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((data) => setData(data[currency]))
            .catch(err => console.error("There are some issues while fetching the data, error is : " + err))

    }, [currency])
    return data;
}

export default useCurrencyInfo;