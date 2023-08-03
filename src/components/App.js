import React, { useState } from "react";
import Displayfood from "./Displayfood";

const App=()=>{
    let [selectedCategory,setSelectedCategory]=useState('All');

    return(
        <div id="main">
            <h1>Our Menu</h1>
            <div className="categories">
                <button onClick={()=>setSelectedCategory('All')}>All</button>
                <button id="filter-btn-1" onClick={()=>setSelectedCategory('breakfast')}>Breakfast</button>
                <button id="filter-btn-2" onClick={()=>setSelectedCategory('lunch')}>Lunch</button>
                <button id="filter-btn-3" onClick={()=>setSelectedCategory('shakes')}>Shakes</button>
            </div>
            <Displayfood category={selectedCategory}/>
        </div>
    )
}

export default App
