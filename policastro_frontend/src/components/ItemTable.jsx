import ItemRow from "./ItemRow"


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
                        <ItemRow key={item.id} item={item}></ItemRow>
                    )
                })}

            </tbody>
        </table>
    )
}