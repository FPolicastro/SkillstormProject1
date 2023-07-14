import { useEffect, useState } from "react";
import ItemTable from "./ItemTable";


export default function Items(){

    const url = 'http://localhost:8080/items';

    const [items, setItems] = useState([]);
    const [showTable, setShowTable] = useState(true);

    //Resets the state of the table
    function refreshTable(){
        console.log('table refreshed');
        setShowTable(false);
        setShowTable(true);
    }

    //Gets item data on load
    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                setItems(returnedData);
            })
            .catch(error => console.error(error));
    }, []);


    //Simple return, just passes necessary info into ItemTable
    return(
        <>
            {showTable && <ItemTable key={showTable} items={items} setItems={setItems} refreshTable={refreshTable}/>}
        </>
    )
}