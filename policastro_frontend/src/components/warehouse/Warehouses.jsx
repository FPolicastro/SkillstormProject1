import { useEffect, useState } from "react";
import WarehouseCards from "./WarehouseCards";
import Warehouse from "./Warehouse";

//Main Warehouses screen with several warehouse cards
export default function Warehouses(){

    const url = 'http://localhost:8080/warehouses';

    const [warehouses, setWarehouses] = useState([]);
    const [currentWarehouse, setCurrentWarehouse] = useState(-1);

    //Basic get for warehouse data
    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                setWarehouses(returnedData);
            })
            .catch(error => console.error(error));
    }, []);

    //Meant to help update properly by calling this function fron child components
    function handleNewWarehouse(warehouse){
        setWarehouses((oldState) => {
            return [...oldState, warehouse];
        })
    }


    return(
        <>

            {/** If a warehouse is not select -1, show WarehouseCards, which is the select screen. If one is selected show Warehouse, which is the report of one warehouse */}
            {(currentWarehouse == -1) ? 
            <WarehouseCards warehouseData={warehouses} setCurrentWarehouse={setCurrentWarehouse} handleNewWarehouse={handleNewWarehouse} setWarehouses={setWarehouses}/> : 
            <Warehouse warehouseData = {warehouses} setCurrentWarehouse={setCurrentWarehouse} warehouseId={currentWarehouse}/>}
        </>
    )
}