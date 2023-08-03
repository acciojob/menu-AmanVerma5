import React, { useState } from "react";
import Displayfood from "./Displayfood";

const App=()=>{
    let [selectedCategory,setSelectedCategory]=useState('All');

    return(
        <div className="App">
            <h1>Our Menu</h1>
            <div className="categories">
                <p onClick={()=>setSelectedCategory('All')}>All</p>
                <p onClick={()=>setSelectedCategory('breakfast')}>Breakfast</p>
                <p onClick={()=>setSelectedCategory('lunch')}>Lunch</p>
                <p onClick={()=>setSelectedCategory('shakes')}>Shakes</p>
            </div>
            <Displayfood category={selectedCategory}/>
        </div>
    )
}

export default App
