import React from "react";

function Item({pokemon, selectPokemon}){
    return(
        //console.log(props.task)
        //<li><span>✔</span>{props.text.title}<span>❌</span></li>
        <tr>
            <td width="20%">{pokemon.name}</td>
            <td width="20%"><img src={pokemon.image} alt={pokemon.name} width="128" height="128"/></td>
            <td width="10%">{pokemon.attack}</td>
            <td width="10%">{pokemon.defense}</td>
            <td width="20%">
                <span className="main-table__edit" onClick={() => selectPokemon(pokemon, "Editar")}></span>{"  "}
                <span className="main-table__delete" onClick={() => selectPokemon(pokemon, "Eliminar")}></span>
            </td>
        </tr>
    );
}


/*const detail = document.querySelector('.main-task-todo__detail');
const expand = () => {
    if (detail){
        console.log(detail);
        detail.addEventListener('click', () => {
            console.log("expandir");
        });
    }
}

expand();*/




export {Item};