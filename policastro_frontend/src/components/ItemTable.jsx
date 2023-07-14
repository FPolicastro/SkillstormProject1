import { useEffect, useState} from "react";
import ItemRow from "./ItemRow"


export default function ItemTable({items, setItems, refreshTable}){

    const url = 'http://localhost:8080/items';

    const [disableEdit, setDisableEdit] = useState(false);
    const [addingItem, setAddingItem] = useState(false);

    function toggleAddingItem(){setAddingItem(!addingItem)}

    function handleNewItem(item){
        setItems((oldState) =>{
            return [...oldState, item];
        });
    }

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
            setItems((oldItems) =>{
                for(let x = 0; x < oldItems.length; x++){
                    console.log(oldItems[x])
                    if (oldItems[x].id == returnedData.id){
                        oldItems[x] = returnedData
                        return oldItems
                    }
                }
            });
            setDisableEdit(false);
            refreshTable();

        })
        .catch((error) => console.log(error))

    }

    function submitNew(event){
        event.preventDefault();
        const data = new FormData(event.target);

        const newItem = {
            name: data.get('nameInput'),
            units_per_item: data.get('unitInput')
        }


        fetch(url + "/item", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(data => data.json())
            .then(returnedData =>{
                console.log(returnedData);
                handleNewItem(returnedData);

                event.target.reset();

            })
            .catch(error => console.error(error))

    }

    return (
        <>
        <form onSubmit={submitForm}>
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
                            <ItemRow key={item.id} items={items} item={item} disableEdit={disableEdit} setDisableEdit={setDisableEdit}></ItemRow>
                        )
                    })}
                    {!addingItem &&
                    <tr>
                        <td><button type="button" className="btn btn-success" onClick={toggleAddingItem}>Create New Item</button></td>
                    </tr>
                    }


                </tbody>
            </table>
        </form>
        {addingItem &&
            <>
                <form onSubmit={submitNew}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="nameInput" className="form-label">Item</label>
                                    <input type="text" className="form-control" name="nameInput" id="nameInput"></input>
                                </td>
                    
                                <td>
                                    <label htmlFor="unitInput" className="form-label">Units Per Item</label>
                                    <input type="number" className="form-control" min={0} name="unitInput" id="unitInput"></input>
                                </td>

                                <td>
                                    <button type="submit" className="btn btn-success">Create</button>
                                    <button type="button" className="btn btn-secondary" onClick={toggleAddingItem}>Cancel</button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
     
                </form>
            </>}
        </>
    )
}