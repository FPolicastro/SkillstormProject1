import { useEffect, useState } from "react"


export default function ItemRow({item, items, disableEdit, setDisableEdit}){

    const [beingEdited, setBeingEdited] = useState(false);

    function toggleBeingEdited(){ 
        setBeingEdited(!beingEdited);
        //setDisableEdit(!disableEdit);
    };

    return(
        <>
            {!beingEdited &&
            <tr>
                <td>{item.name}</td>
                <td>{item.units_per_item}</td>
                <td><button type="button" className="btn btn-warning" onClick={toggleBeingEdited} disabled={disableEdit}>Edit</button></td>
                <td><button type="button" className="btn btn-danger">Delete</button></td>
            </tr>
            }
            {beingEdited &&
            
            <tr>
                <td><input type="text" className="form-control" name="nameInput"></input></td>
                <td><input type="number" className="form-control" name="unitInput" min={0}></input></td>
                <td><button type="submit" className="btn btn-success">Submit</button></td>
                <td>
                    <button type="button" className="btn btn-secondary" onClick={toggleBeingEdited} >Cancel</button>
                    <input type="hidden" className="form-control" name="idInput" value={item.id}></input>
                </td>
            </tr>
            
            }
        </>
    )
}