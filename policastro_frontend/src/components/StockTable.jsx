

export default function StockTable({stock, setStock}){

    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Units per Item</th>
                        <th>Total Weight</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stockListing) =>{
                        let totalWeight = stockListing.quantity * stockListing.item.units_per_item;
                        return(
                            <tr key = {stockListing.id}>
                                <td>{stockListing.item.name}</td>
                                <td>{stockListing.warehouse.location}</td>
                                <td>{stockListing.quantity}</td>
                                <td>{stockListing.item.units_per_item}</td>
                                <td>{totalWeight}</td>
                                <td><button type="button" className="btn btn-warning">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}