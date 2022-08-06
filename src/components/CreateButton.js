import React from "react";

function CreateButton({setOpenModal, loading}){
    const onOpenModal = () => {
        setOpenModal([true, ""]);
    }

    return(
        !loading && <button className="create-todo-button" title="Agregar Pokemon" onClick={onOpenModal}>
            <span className="header-actions__add"></span>
            Nuevo
        </button>
    )
}

export {CreateButton};