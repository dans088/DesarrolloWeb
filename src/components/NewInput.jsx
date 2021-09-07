//import React from "react";
import React  from "react";

function Home({getInfo}) {

    return (
        
        getInfo()
        
    );
}

function About(){
    return(
        <div>
            <h2>Carrousel</h2>
        </div>
    );
}

function Dashboard(){
    return(
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

export {Home,About,Dashboard};
