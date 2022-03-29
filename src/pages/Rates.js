import { useEffect, useState } from "react";

const getRates = () => {
    const response = {"status":"200","message":"rates","data":{"EURRUB":"71.3846","USDRUB":"58.059"}}
    return response.data;
}

function Rates() {
    const [rates, setRates] = useState({});
    
    useEffect(() => {
        const rates = getRates();
        setRates(rates);
    }, []);

    return <>
        <h1>Rates</h1>
        <div>
            {
                Object.entries(rates).map(([key, value]) => <div>{key} - {value}</div>)
            }
        </div>
    </>
}

export default Rates;