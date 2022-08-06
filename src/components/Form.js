import React, {useRef} from "react";

function Form ({addPokemon, editPokemon, deletePokemon, setOpenModal, action, infoPokemon, setInfoPokemon, setActive, active}) {
    
    const form = useRef(null);

    // Función para cerrar el modal
    const onCancel = () => {
        setOpenModal([false, ""]);
    };

    const onHandle = () => {
        const formData = new FormData(form.current);
        const newPokemon = {
            'name': formData.get('name'),
            'image':formData.get('image'),
            'attack': formData.get('attack'),
            'defense': formData.get('defense'),
            "hp": "0",
            "type": "Unknown",
            "idAuthor": 1,
        }
        if (action === "Editar") {
            editPokemon(infoPokemon.id, newPokemon);
        } else {
            addPokemon(newPokemon)
        }
    };

    const handleChange = e =>{
        const {name, value} = e.target;
        setInfoPokemon({
            ...infoPokemon,
            [name]: value.trim()
        });
        
        if (!infoPokemon.name  || !infoPokemon.image ) {
            setActive(true);
        }else{
            setActive(false);
        }
    }

    if (action === "Editar") {
        return(
            <form ref={form}>
                <h2>Modificar Pokemon: {infoPokemon.name}</h2>
                <section className="form-section">
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" id="name" name="name" placeholder="Nombre" defaultValue={infoPokemon && infoPokemon.name}/><br/>
                    <label htmlFor="attack">Ataque: </label>
                    <span>0</span>
                    <input type="range" id="attack" name="attack" defaultValue={infoPokemon && infoPokemon.attack}/>
                    <span>100</span>
                </section>
                <section className="form-section">
                    <label htmlFor="image">Imagen: </label>
                    <input type="Text" id="image" name="image" placeholder="Url" defaultValue={infoPokemon && infoPokemon.image}/><br/>
                    <label htmlFor="defense">Defensa: </label>
                    <span>0</span>
                    <input type="range" id="defense" name="defense" defaultValue={infoPokemon && infoPokemon.defense}/>
                    <span>100</span>
                </section>
                <div className="form-button-container">
                    <button
                        type="button"
                        className="form-button form-button--add"
                        onClick={() => onHandle(action)}
                    >
                        <span className="form-button-container__edit-icon"></span>
                        Modificar
                    </button>
                    <button
                    type="button"
                    className="form-button form-button--cancel"
                    onClick={onCancel}
                    >
                        <span className="form-button-container__cancel-icon"></span>
                        Cancelar
                    </button>
                </div>
            </form>
        );
        
    } else if (action === "Eliminar") {
        return(
            <form>
                <h2 className="form-title__delete">Seguro deseas eliminar el pokemon: {infoPokemon.name} </h2>
                <div className="form-button-container">
                    <button
                        type="button"
                        className="form-button form-button--add"
                        onClick={() => deletePokemon(infoPokemon.id)}
                    >
                        <span className="form-button-container__check-icon"></span>
                        Si
                    </button>
                    <button
                    type="button"
                    className="form-button form-button--cancel"
                    onClick={onCancel}
                    >
                        <span className="form-button-container__cancel-icon"></span>
                        Cancelar
                    </button>
                </div>
            </form>
        )
    } else {
        return(
            <form ref={form}>
                <h2>Nuevo Pokemon</h2>
                <section className="form-section">
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" id="name" name="name" placeholder="Nombre" onKeyUp={handleChange}/><br/>
                    <label htmlFor="attack">Ataque: </label>
                    <span>0</span>
                    <input type="range" id="attack" name="attack" />
                    <span>100</span>
                </section>
                <section className="form-section">
                    <label htmlFor="image">Imagen: </label>
                    <input type="Text" id="image" name="image" placeholder="Url" onKeyUp={handleChange}/><br/>
                    <label htmlFor="defense">Defensa: </label>
                    <span>0</span>
                    <input type="range" id="defense" name="defense" />
                    <span>100</span>
                </section>
                <div className="form-button-container">
                    <button
                        type="button"
                        className="form-button form-button--add"
                        onClick={() => onHandle(action)}
                        disabled={active}
                    >
                    <span className="form-button-container__save-icon"></span>
                        Guardar
                    </button>
                    <button
                    type="button"
                    className="form-button form-button--cancel"
                    onClick={onCancel}
                    >
                        <span className="form-button-container__cancel-icon"></span>
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}

export {Form};