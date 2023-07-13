import { useState } from "react"
import Warehouses from "./components/Warehouses";
import Stock from "./components/Stock";
import Items from "./components/Items";
import 'bootstrap/dist/css/bootstrap.css';


export default function App(){

    const [view, setView] = useState(0);
    return(
        <>
            {(view == 0) && <Warehouses setView={setView}/>}
            {(view == 1) && <Stock setView={setView}/>}
            {(view == 2) && <Items setView={setView}/>}
        
        </>
    )
}