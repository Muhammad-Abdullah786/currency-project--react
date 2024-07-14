import { useEffect, useState } from "react";


// this hook will return data  ie currency data


// mostly api calls are in string format we also need to convert it to json format
const useCurrencyInfo = (currency) => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`) // now we have fetch
            .then((response) => { response.json() })// now its has been converted to json next step should be where should i hold the date 
            // it cannot be a local variable because it will not be able to change then use useState
            .then((response) => setData(response[currency]))
        console.log(data);
    }, [currency]) // whenever currency changes useeffect will change
    console.log(data);
    return data
}
// se how we will be able to change currency?

export default useCurrencyInfo