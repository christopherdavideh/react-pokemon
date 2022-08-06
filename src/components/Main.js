import React from "react";
import '../css/main.css';

function Main ({children, loading}){
    return(
        <main>            
            {React.Children.toArray(children).map((child) => React.cloneElement(child, { loading }))}
        </main>
    );
}

export {Main};