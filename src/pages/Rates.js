import { useEffect, useReducer, useState } from "react";
import {reducer, initialState} from '../reducers/reducer';
// import {initialState} from '../reducers/reducer';

const getRates = () => {
    const response = { "status": "200", "message": "rates", "data": { "EURRUB": "71.3846", "USDRUB": "58.059" } }
    return response.data;
}

function RateLine({title, value}) {
    return <div>
        {title} - {value}
    </div>
}

function Rates() {
    // const [rates, setRates] = useState({});
    const [rates, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    //     const rates = getRates();
    //     setRates(rates);
    // }, []);

    return <>
        <h1>Rates</h1>
        <div>
            { Object.entries(rates).map(([title, value], key) => <RateLine key={key} title={title} value={value} />) }
        </div>
    </>
}

export default Rates;