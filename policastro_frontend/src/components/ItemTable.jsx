

export default function ItemTable({items, setItems}){

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Units per Item</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) =>{
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.units_per_item}</td>
                            <td><button type="button" className="btn btn-warning">Edit</button></td>
                            <td><button type="button" className="btn btn-danger">Delete</button></td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}