import React from "react";

function Table ({searchValue, loading, pokemonList, onLoading, onEmpty, render}){
    
    let msg = `No se han encontrado resultados para tu búsqueda: ${searchValue}`;

    return(
        <table className="main-table">
            <thead>
                <tr>
                    <th width="20%">Nombre</th>
                    <th width="30%">Imagen</th>
                    <th width="10%">Ataque</th>
                    <th width="10%">Defensa</th>
                    <th width="20%">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {loading && onLoading()}
                {(!loading && !pokemonList.length) && onEmpty(msg)}
                {pokemonList.map(pokemon => render(pokemon))}
            </tbody>
        </table>
    );
}

export {Table};