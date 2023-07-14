import { useEffect, useState } from "react";
import ItemTable from "./ItemTable";


export default function Items(){

    const url = 'http://localhost:8080/items';

    const [items, setItems] = useState([]);
    const [showTable, setShowTable] = useState(true);

    function refreshTable(){
        console.log('table refreshed');
        setShowTable(false);
        setShowTable(true);
    }

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(returnedData => {
                setItems(returnedData);
            })
            .catch(error => console.error(error));
    }, []);


    return(
        <>
            {showTable && <ItemTable key={showTable} items={items} setItems={setItems} refreshTable={refreshTable}/>}
        </>
    )
}