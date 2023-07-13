

export default function WarehouseCards({warehouseData}){


    return(
        <>
            {warehouseData.map((warehouse) =>{
                return(
                    <div className="card" style={{width: '18rem'}} key={warehouse.id}>
                        <div className = "card-body">
                            <h5 className="card-title">{warehouse.location}</h5>
                        </div>
                    </div>
                )
            })}
        </>
    )
}