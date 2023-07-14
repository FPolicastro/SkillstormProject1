import { useEffect, useState } from "react";
import StockTable from "./StockTable";

//Simple class that gets stock from database and inputs it into table component
export default function Stock(){
    const url = 'http://localhost:8080/stock';

    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                setStock(returnedData);
            })
            .catch(error => console.error(error));
    }, []);


    return(
        <>
            <StockTable stock={stock} setStock={setStock}/>
            <div style={{height:'30em'}}></div>
        </>
    )
}