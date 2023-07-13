

export default function WarehouseCards({warehouseData, setCurrentWarehouse}){


    function selectWarehouse(warehouseId){
        setCurrentWarehouse(warehouseId);
    }
    console.log(warehouseData);
    return(
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
        </div>
    )
}