import React from "react";

function Search ( {searchValue, loading, onChange} ){
    
    const searchValueChange = (event) => {
        onChange(event.target.value);
    };

    return(
        <div className="header-actions__search-container ">
            <span className="header-actions__search-icon "></span>
                <input className={`header-actions__search ${!!loading && 'search-visible'}`} type="text" name="search" id="search" 
                    placeholder="Buscar"
                    value={searchValue}
                    onChange={searchValueChange}
                    disabled={loading}
                />
        </div>

    );
}

export {Search};