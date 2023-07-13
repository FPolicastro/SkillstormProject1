import { useEffect, useState } from "react";
import WarehouseCards from "./WarehouseCards";
import Warehouse from "./Warehouse";


export default function Warehouses(props){

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

    function viewItems(){

    }

    function viewStock(){

    }


    return(
        <>
            <div>
                <button type="button" className="btn btn-info" onClick={props.setView(2)}>Manage Items</button>
                <button type="button" className="btn btn-info" onClick={props.setView(1)}>See all Warehouse Stock</button>
            </div>

            {(currentWarehouse == -1) ? 
            <WarehouseCards warehouseData={warehouses} setCurrentWarehouse={setCurrentWarehouse}/> : 
            <Warehouse warehouseData = {warehouses} setCurrentWarehouse={setCurrentWarehouse} warehouseId={currentWarehouse}/>}
        </>
    )
}