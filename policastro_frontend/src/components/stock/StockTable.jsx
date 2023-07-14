import { useEffect, useState } from "react";

//Pretty bloated class containing all the stock data. In hindsight should have used more Components here
export default function StockTable({stock, setStock}){

    const url = "http://localhost:8080/stock"

    //States for table updates and modification
    const[addingItem,setAddingItem] = useState(false);
    const [warehouses, setWarehouses] = useState([]);
    const [items, setItems] = useState([]);
    const [updateState, setUpdateState] = useState(false)

    function toggleState(){
        setUpdateState(!updateState);
    }

    //Getting warehouses and items in order to have a complete list of options when creating a new Stock entry
    useEffect(() => {
        fetch('http://localhost:8080/warehouses')
            .then(data => data.json())
            .then(returnedData => {
                setWarehouses(returnedData);
            })
            .catch(error => console.error(error));

            fetch('http://localhost:8080/items')
            .then(data => data.json())
            .then(returnedData => {
                setItems(returnedData);
            })
            .catch(error => console.error(error));
        
    }, []);

    //Toggles the elements used for creating new stock entry
    function toggleAddingItem(){
        setAddingItem(!addingItem);
    }

    //Form submit for creating a new Stock entry
    function submitNew(event){
        event.preventDefault();
        const data = new FormData(event.target);

        const newStock = {
            quantity: data.get('quantityInput'),
            warehouse: {
                id: data.get('warehouseInput')
            },
            item: {
                id: data.get('itemInput')
            }
            
        }

        //Post method to /stock/listing
        fetch(url + "/listing", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStock)
        })
            .then(data => data.json())
            .then(returnedData =>{
                console.log(returnedData);
                setStock((oldState) =>{
                    return [...oldState, returnedData];
                });

                event.target.reset();

            })
            .catch(error => console.error(error))
        toggleState();

    }

    //Handler for delete button that is on every row.
    function deleteStock(event){
        let stock = event.target.value;
        console.log(stock)
        fetch(url + "/listing/" + stock, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        })
            .then(data => {data ? data.json() : {}})
            .then(returnedData =>{
                console.log(returnedData)
                setStock((oldData) =>{
                    return oldData.filter(thisListing => stock.id != thisListing.id)
                });
            })
            .catch((error) => console.log(error))
        
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">Item</div>
                    <div className="col">Location</div>
                    <div className="col">Quantity</div>
                    <div className="col">Units per Item</div>
                    <div className="col">Total Weight</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>

                {/*Consider making this part a new component*/}
                {stock.map((stockListing) =>{
                    let totalWeight = stockListing.quantity * stockListing.item.units_per_item;
                    return(
                        <div className="row" key = {stockListing.id}>
                            <div className="col">{stockListing.item.name}</div>
                            <div className="col">{stockListing.warehouse.location}</div>
                            <div className="col">{stockListing.quantity}</div>
                            <div className="col">{stockListing.item.units_per_item}</div>
                            <div className="col">{totalWeight}</div>
                            <div className="col"><button type="button" className="btn btn-warning">Edit</button></div>
                            <div className="col"><button type="button" className="btn btn-danger" value={stockListing.id} onClick={deleteStock}>Delete</button></div>
                        </div>
                    )
                })}
                {/*Another short circuit toggle*/}
                {!addingItem &&
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-success" onClick={toggleAddingItem}>Create New Entry</button>
                        </div>
                    </div>
                }  

                {addingItem &&
                    <>
                        <form onSubmit={submitNew}>

                                    <div className="row">
                                        <div className="col">
                                            <label className="form-label">Item</label>
                                            <select name="itemInput" id="itemInput" className="form-select" aria-label="item-selector">
                                                {items.map((item) =>{
                                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                                })}
                                            </select>
                                        </div>
                            
                                        <div className="col">
                                            <label htmlFor="warehouse-selector" className="form-label">Item</label>
                                            <select name="warehouseInput" id="warehouse-selector" className="form-select" aria-label="warehouse-selector">
=                                                {warehouses.map((warehouse) =>{
                                                    return (<option key={warehouse.id} value={warehouse.id}>{warehouse.location}</option>)
                                                })}
                                            </select>
                                        </div>

                                        <div className="col">
                                            <label htmlFor="quantityInput" className="form-label">Quantity</label>
                                            <input type="number" name="quantityInput" id="quantityInput" min={1}></input>
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