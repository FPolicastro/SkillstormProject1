import { useState } from "react"
import Warehouses from "./components/warehouse/Warehouses";
import Stock from "./components/stock/Stock";
import Items from "./components/items/Items";
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

    function refreshView(){
        setView((oldView) => oldView + 1);
        setTimeout(()=>{setView((oldView) => oldView - 1);},1)
        
    }
    //Taking advantage of && Short circuiting
    return(
        <>
            <div style={{margin:'.5em'}}><h1>Warehouse Mangement</h1></div>
            <div style={{margin:'.5em'}}>
                {view != 0 && <button type="button" className="btn btn-primary" onClick={viewWarehouses}>Manage Warehouses</button>}
                {view != 2 && <button type="button" className="btn btn-secondary" onClick={viewItems}>Manage Items</button>}
                {view != 1 && <button type="button" className="btn btn-success" onClick={viewStock}>See all Warehouse Stock</button>}
                <button type="button" className="btn btn-success" onClick={refreshView}>Refresh</button>

            </div>
            {view == 0 && <Warehouses/>}
            {view == 1 && <Stock/>}
            {view == 2 && <Items/>}

            
        
        </>
    )

    
}