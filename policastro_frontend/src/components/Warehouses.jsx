import { useEffect, useState } from "react";
import WarehouseCards from "./WarehouseCards";


export default function Warehouses(props){

    const url = 'http://localhost:8080/warehouses';

    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                setWarehouses(returnedData);
            })
            .catch(error => console.error(error));
    }, []);


    return(
        <>
            <WarehouseCards warehouseData={warehouses}/>
        </>
    )
}