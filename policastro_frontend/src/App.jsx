import { useState } from "react"
import Warehouses from "./components/Warehouses";
import Stock from "./components/Stock";
import Items from "./components/Items";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


export default function App(){

    const [view, setView] = useState(0);

    function viewItems(){
        setView(2);
    }
    function viewStock(){
        setView(1);
    }
    function viewWarehouses(){
        setView(0);
    }
    //Taking advantage of && Short circuiting
    return(
        <>
            <div>
                {view != 0 && <button type="button" className="btn btn-info" onClick={viewWarehouses}>Manage Warehouses</button>}
                {view != 2 && <button type="button" className="btn btn-info" onClick={viewItems}>Manage Items</button>}
                {view != 1 && <button type="button" className="btn btn-info" onClick={viewStock}>See all Warehouse Stock</button>}
            </div>
            {view == 0 && <Warehouses/>}
            {view == 1 && <Stock/>}
            {view == 2 && <Items/>}
        
        </>
    )
}