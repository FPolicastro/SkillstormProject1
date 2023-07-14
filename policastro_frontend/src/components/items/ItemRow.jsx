import { useEffect, useState } from "react"


export default function ItemRow({item, setItems, items, disableEdit, setDisableEdit}){

    const url = 'http://localhost:8080/items';

    const [beingEdited, setBeingEdited] = useState(false);
    const [itemName, setItemName] = useState("");
    const [itemUnits, setItemUnits] = useState(0);

    useEffect(() =>{
        setItemName(item.name);
        setItemUnits(item.units_per_item);
    }, [])

    function toggleBeingEdited(){ 
        setBeingEdited(!beingEdited);
        //setDisableEdit(!disableEdit);
    };

    //The onClick event for the edit form, sends PUT request
    function submitForm(event){
        event.preventDefault()
        console.log(event);

        const data = new FormData(event.target)

        const updateItem = {
            id: data.get('idInput'),
            name: data.get('nameInput'),
            units_per_item: data.get('unitInput')
        }

        fetch(url + "/item", {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        .then((data) => data.json())
        .then((returnedData) =>{ 
            setDisableEdit(false);
            setItemName(returnedData.name);
            setItemUnits(returnedData.units_per_item);
            setBeingEdited(false);
        })
        .catch((error) => console.log(error))
    }

    //The onClick event for the delete button, sends DELETE request
    function deleteItem(event){
        fetch(url + "/item", {
            method: 'DELETE',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(data => {data ? data.json() : {}})
            .then(returnedData =>{
                console.log(returnedData)
                setItems((oldData) =>{
                    return oldData.filter(thisItem => item.id != thisItem.id)
                });

            })
            .catch((error) => console.log(error))
    }


    //Low level html, just the row in ItemTable
    return(
        <>
            {!beingEdited &&
            <div className="row">
                <div className="col">{itemName}</div>
                <div className="col">{itemUnits}</div>
                <div className="col"><button type="button" className="btn btn-warning" onClick={toggleBeingEdited} disabled={disableEdit}>Edit</button></div>
                <div className="col"><button type="button" className="btn btn-danger" onClick={deleteItem}>Delete</button></div>
            </div>
            }
            {beingEdited &&
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col"><input type="text" className="form-control" name="nameInput" defaultValue={itemName}></input></div>
                    <div className="col"><input type="number" className="form-control" name="unitInput" min={0} defaultValue={itemUnits}></input></div>
                    <div className="col"><button type="submit" className="btn btn-success">Submit</button></div>
                    <div className="col">
                        <button type="button" className="btn btn-secondary" onClick={toggleBeingEdited} >Cancel</button>
                        <input type="hidden" className="form-control" name="idInput" value={item.id}></input>
                    </div>
                </div>
            </form>
            
            }
        </>
    )
}