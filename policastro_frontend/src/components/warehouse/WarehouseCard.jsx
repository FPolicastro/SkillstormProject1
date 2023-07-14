import { useEffect, useState } from "react"

//Component for a singular warehouse card.
//At first this was the hardest to get working, and at the end I felt like this was the most functional.
export default function WarehouseCard({warehouse, setCurrentWarehouse, setWarehouses}){

    const url = 'http://localhost:8080/warehouses'

    const [editing, setEditing] = useState(false);
    const [warehouseUnits, setWarehouseUnits] = useState(0.0);
    const [warehouseLocation, setWarehouseLocation] = useState("");

    //Set units when mounted
    useEffect(() =>{
        setWarehouseUnits(warehouse.units);
        setWarehouseLocation(warehouse.location);
    }, [])

    //Toggle editing card state
    function toggleEditing(){setEditing(!editing)};

    //Button handler for deleting the card
    function deleteWarehouse(){
        fetch(url + "/warehouse", {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(warehouse)
        })
            .then(data => data.json())
            .then(returnedData =>{
                console.log(returnedData)
                setWarehouses((oldData) =>{
                    let a = [];
                    return oldData.filter(thisWarehouse => warehouse.id != thisWarehouse.id)
                });
            })
            .catch((error) => console.log(error))
        
    }

    //Form handler to edit card and return to normal view.
    function submitEdit(event){
        toggleEditing();
        event.preventDefault()
        console.log(event);

        const data = new FormData(event.target)

        const updateWarehouse = {
            id: data.get('idInput'),
            location: data.get('locationInput'),
            units: data.get('capacityInput'),
            current_load: data.get('currentLoadInput')
        }

        fetch(url + "/warehouse", {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateWarehouse)
        })
        .then((data) => data.json())
        .then((returnedData) =>{ 
            setWarehouseLocation(returnedData.location);
            warehouse.units = returnedData.units;
            warehouse.current_load = returnedData.current_load;
            setWarehouseUnits(returnedData.units);
        })
        .catch((error) => console.log(error))
    }

    return(
        <>
            {/**Front side is information/select/delete */}
            {!editing &&
            <div className="card" style={{width: '18rem'}} key={warehouse.id}>
                <div className = "card-body">
                    <h5 className="card-title">{warehouseLocation}</h5>
                    <p className="card-text">Capacity: {warehouseUnits}</p>
                    <button type="button" className="btn btn-primary" onClick={() => setCurrentWarehouse(warehouse.id)}>Select</button>
                    <button type="button" className="btn btn-warning" onClick={toggleEditing}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={deleteWarehouse}>Delete</button>
                </div>
            </div>
            }
            {/**Back side of cards is edit */}
            {editing &&
            <div className="card" style={{width: '18rem'}} key={warehouse.id}>
                <div className = "card-body">
                    <form onSubmit={submitEdit}>
                        <input type="text" name="locationInput" defaultValue={warehouse.location} className="form-control"></input>
                        <input type="number" name="capacityInput" defaultValue={warehouse.units} className="form-control"></input>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                        <button type="button" className="btn btn-secondary" onClick={toggleEditing}>Cancel</button>
                        <input type="hidden" name="currentLoadInput" value={warehouse.current_load}></input>
                        <input type="hidden" name="idInput" value={warehouse.id}></input>
                    </form>
                </div>
            </div>
            
            }
        </>
    )
}