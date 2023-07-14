
//Sort of an analysis report page
export default function Warehouse({warehouseId, setCurrentWarehouse, warehouseData}){

    const currentWarehouse = warehouseData.find(x => x.id == warehouseId);
    let totalUnits = 0.0;
    //Checks if capacity is too high (for color)
    let exceededCapacity = false;

    //Used by Back button to return to select page
    function back(){
        setCurrentWarehouse(-1);
    }
    //Returns a simple table with only the stock from the current warehouse
    return(
        <>
            <h1>Selected {currentWarehouse.location}</h1>
            <button type="button" className="btn btn-secondary" onClick={back}>Back</button>
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
                        exceededCapacity = totalUnits > currentWarehouse.units
                        return(
                            <tr key={stockListing.id}>
                                <td>{stockListing.item.name}</td>
                                <td>{stockListing.quantity}</td>
                                <td>{stockListing.item.units_per_item}</td>
                                <td>{itemWeight}</td>
                            </tr>
                        )
                    })}
                    {/**Used the ternary operator to color a button with bootstrap */}
                    <tr className={exceededCapacity ? "table-danger" : "table-info"}>
                        <td colSpan={3}/>
                        <td style={{fontWeight:"bold"}}>{totalUnits}/{currentWarehouse.units}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}