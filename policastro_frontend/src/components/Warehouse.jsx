

export default function Warehouse({warehouseId, setCurrentWarehouse, warehouseData}){

    const currentWarehouse = warehouseData.find(x => x.id == warehouseId);
    let totalUnits = 0.0;

    function back(){
        setCurrentWarehouse(-1);
    }
    return(
        <>
            <h1>Selected {currentWarehouse.location}</h1>
            <button type="button" class="btn btn-secondary" onClick={back}>Back</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Weight per Item</th>
                        <th>Total Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {currentWarehouse.stock.map((stockListing)=>{
                        let itemWeight = stockListing.quantity * stockListing.item.units_per_item;
                        totalUnits += itemWeight;
                        return(
                            <tr>
                                <td>{stockListing.item.name}</td>
                                <td>{stockListing.quantity}</td>
                                <td>{stockListing.item.units_per_item}</td>
                                <td>{itemWeight}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan={3}/>
                        <td style={{fontWeight:"bold"}}>{totalUnits}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}