import { useRef, useState } from "react";


export default function WarehouseCards({warehouseData, setCurrentWarehouse, handleNewWarehouse}){

    const url = 'http://localhost:8080/warehouses'

    const [creating, setCreating] = useState(false);

    const toggleCreating = () => setCreating(!creating);

    function submitNew(event){
        event.preventDefault();
        const data = new FormData(event.target);

        const newWarehouse = {
            location: data.get('locationInput'),
            units: data.get('capacityInput')
        }

        console.log(newWarehouse);

        fetch(url + "/warehouse", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWarehouse)
        })
            .then(data => data.json())
            .then(returnedData =>{
                console.log(returnedData);
                handleNewWarehouse(returnedData);

                event.target.reset();

            })
            .catch(error => console.error(error))
    }

    function selectWarehouse(warehouseId){
        setCurrentWarehouse(warehouseId);
    }
    console.log(warehouseData);
    return(
        <>

            <div className="d-flex flex-wrap">
                {warehouseData.map((warehouse) =>{
                    return(
                        <div className="card" style={{width: '18rem'}} key={warehouse.id}>
                            <div className = "card-body">
                                <h5 className="card-title">{warehouse.location}</h5>
                                <p className="card-text">Capacity: {warehouse.units}</p>
                                <button type="button" className="btn btn-primary" onClick={() => selectWarehouse(warehouse.id)}>Select</button>
                            </div>
                        </div>
                    )
                })}
                <div className="card" style={{width:'18rem'}}>
                    <div className="card-body">
                        {!creating? 
                        (
                            <>
                                <h5 className="card-title">New Warehouse</h5> 
                                <p className="card-text">Create a new warehouse</p>
                                <button type="button" onClick={toggleCreating} className="btn btn-success" >Create</button>
                            </>
                        ) : //ELSE
                        (
                            <>
                                <h5 className="card-title">New Warehouse</h5>
                                <form onSubmit={submitNew}>
                                    <label htmlFor="locationInput" className="form-label">Location</label>
                                    <input type="text" className="form-control" name="locationInput" id="locationInput"></input>

                                    <label htmlFor="capacityInput" className="form-label">Capacity</label>
                                    <input type="number" className="form-control" min={1} name="capacityInput" id="capacityInput"></input>

                                    <button type="submit" className="btn btn-success">Create</button>
                                    <button type="button" onClick={toggleCreating} className="btn btn-secondary" >Cancel</button>
                                </form>
                                
                            </>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}