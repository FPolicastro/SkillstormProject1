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
        
            <div className="container">
                    <div className="row">
                        <div className="col" style={{fontWeight:"bold"}}>Item</div>
                        <div className="col" style={{fontWeight:"bold"}}>Units per Item</div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    {items.map((item) =>{
                        return (
                            <ItemRow key={item.id} items={items} item={item} disableEdit={disableEdit} setDisableEdit={setDisableEdit}></ItemRow>
                        )
                    })}
                    {!addingItem &&
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-success" onClick={toggleAddingItem}>Create New Item</button>
                        </div>
                    </div>
                    }


                {addingItem &&
                    <>
                        <form onSubmit={submitNew}>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="nameInput" className="form-label">Item</label>
                                            <input type="text" className="form-control" name="nameInput" id="nameInput"></input>
                                        </div>
                            
                                        <div className="col">
                                            <label htmlFor="unitInput" className="form-label">Units Per Item</label>
                                            <input type="number" className="form-control" min={0} name="unitInput" id="unitInput"></input>
                                        </div>

                                        <div className="col">
                                            <button type="submit" className="btn btn-success">Create</button>
                                            <button type="button" className="btn btn-secondary" onClick={toggleAddingItem}>Cancel</button>
                                        </div>
                                    </div>

                        </form>
                    </>
                }
            </div>

        </>
    )
}