import { useEffect, useState } from "react";
import WarehouseCards from "./WarehouseCards";
import Warehouse from "./Warehouse";


export default function Warehouses(){

    const url = 'http://localhost:8080/warehouses';

    const [warehouses, setWarehouses] = useState([]);
    const [currentWarehouse, setCurrentWarehouse] = useState(-1);

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


            {(currentWarehouse == -1) ? 
            <WarehouseCards warehouseData={warehouses} setCurrentWarehouse={setCurrentWarehouse}/> : 
            <Warehouse warehouseData = {warehouses} setCurrentWarehouse={setCurrentWarehouse} warehouseId={currentWarehouse}/>}
        </>
    )
}