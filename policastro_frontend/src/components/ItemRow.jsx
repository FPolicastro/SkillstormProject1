import { useState } from "react"


export default function ItemRow({item}){

    const [beingEdited, setBeingEdited] = useState(false);

    return(
        <>
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.units_per_item}</td>
                <td><button type="button" className="btn btn-warning">Edit</button></td>
                <td><button type="button" className="btn btn-danger">Delete</button></td>
             </tr>
        </>
    )
}