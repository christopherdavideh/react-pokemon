import React, {useState, useEffect} from "react";
import axios from "axios";

function usePokemon(){
    //Estados
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(true);
    const [error, setError] = useState(false);
    const [pokemons, setPokemon] = useState([]);
    const [infoPokemon, setInfoPokemon] = useState({});
    const [openModal, setOpenModal] = useState([false, ""])

    const BASE_URL = "https://bp-pokemons.herokuapp.com";
    let pokemonList = [];

    /* Funcion para Obtener la lista de Pokemones */
    const getPokemon = async () => {
        const { data, status } = await axios.get(`${BASE_URL}/?idAuthor=1`);
        setPokemon(data);
        if (status !== 200) {
            setError(`Error ${status}: Se ha pruducido un error inesperado`);
        }else{
            setError(false);
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            try {
                getPokemon();
                setLoading(false);

            } catch (error) {
                setError(error);
            }
        }, 2000);
    }, []);

    /* Funcion para Guardar Pokemons consumiendo la API*/
    const savePokemon = async (dataPokemon) => {
        try {
            const { status } = await axios.post(`${BASE_URL}/?idAuthor=1`,dataPokemon);
            setOpenModal([false, ""]);
            setActive(true);
            getPokemon();
            if (status !== 200) {
                setError(`Error ${status}: Se ha pruducido un error inesperado`);
            }else{
                setError(false);
            }
        } catch (error) {
            setError(error);
        }
    }

    /* Funcion para obtener los datos del formulario */
    const addPokemon = async (newPokemon) => {
        const {name, image, attack, defense} = newPokemon
        if (name === "" || image === "" || attack === "" || defense === "") {
            setError("Error! existen campos vacios");
        } else {
            savePokemon(newPokemon);
        }
    };

    /*Funcion para obtener los datos del poquemon selecionado*/
    const selectPokemon = (pokemon, action) => {
        setInfoPokemon(pokemon);
        setOpenModal([true, action]);
    }

    /* Funcion para actualizar los datos del pokemon consumiendo la API*/
    const updatePokemon = async (id, pokemon) => {
        try {
            const { status } = await axios.put(`${BASE_URL}/${id}`,pokemon);
            setOpenModal([false, ""]);
            getPokemon();
            if (status !== 200) {
                setError(`Error ${status}: Se ha pruducido un error inesperado`);
            }else{
                setError(false);
            }
        } catch (error) {
            setError(error);
        }
    }

    /* Obtenemos los datos del formulario */
    const editPokemon = async (id, pokemon) => {
        const {name, image, attack, defense} = pokemon
        if (name === "" || image === "" || attack === "" || defense === "") {
            setError("Error! existen campos vacios");
        } else {
            updatePokemon(id, pokemon);
        }
    };

    /* Logica para eliminar un pokemon consumiendo la API */
    const deletePokemon = async (id, pokemon) => {
        try {
            const { status } = await axios.delete(`${BASE_URL}/${id}`,pokemon);
            setOpenModal([false, ""]);
            getPokemon();
            if (status !== 200) {
                setError(`Error ${status}: Se ha pruducido un error inesperado`);
            }else{
                setError(false);
            }
        } catch (error) {
            setError(error);
        }
    }

    /* Logica para la Busqueda de Pokemones */

    const onChange = (value) => {
        setSearchValue(value);
    }

    if (!searchValue.length > 0) {
        pokemonList = [...pokemons];

    } else {
        const searchValueLower = searchValue.toLowerCase();
        pokemonList = pokemons.filter((pokemon) => {
            const pokemonLower = pokemon.name.toLowerCase();
            if (pokemonLower.includes(searchValueLower)) {
                return pokemon
            }
        });
    }

    return {
        searchValue,
        onChange,
        pokemonList,
        addPokemon,
        selectPokemon,
        loading,
        error,
        openModal,
        setOpenModal,
        infoPokemon,
        setInfoPokemon,
        editPokemon,
        deletePokemon,
        setActive,
        active,
    };
}

export { usePokemon };