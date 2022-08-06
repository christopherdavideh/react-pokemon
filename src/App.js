import React from "react";
import './css/app.css';

//import { TodoProvider } from "./Context/TodoContext";
import { usePokemon } from "./hooks/usePokemon";
import { Header } from "./components/Header";
import {Search} from "./components/Search";
import {CreateButton} from "./components/CreateButton";
import { Main } from "./components/Main";
import {Table} from "./components/Table";
import {Item} from "./components/Item";
import { Modal } from "./components/Modal";
import { Form } from "./components/Form";
import { LoadSkeleton } from "./components/LoadSkeleton";
import { EmptyTodo } from "./components/EmptyTodo";
import { Error } from "./components/Error";

function App() {
    const {
        searchValue,
        setSearchValue,
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
    } = usePokemon();
    const [isOpen, action] = openModal

    return (
      <React.Fragment>
            <Header>
                <Search searchValue = {searchValue} setSearchValue = {setSearchValue} loading={loading}/>
                <CreateButton setOpenModal= {setOpenModal} />
            </Header>
            {!!error && (<Main><Error error = {error} /></Main>)}
            {!error &&  (
              <Main loading = {loading}>
                <Table
                    searchValue = {searchValue}
                    pokemonList={pokemonList}
                    onLoading = {() => (
                        <>                            
                            <LoadSkeleton />
                            <LoadSkeleton />
                            <LoadSkeleton />
                            <LoadSkeleton />
                        </>
                    )}
                    onEmpty = {(msg) => <EmptyTodo img={""} msg={msg} />}
                    render = { (pokemon) =>  //console.log(pokemon.title)
                        <Item key={pokemon.id} pokemon= {pokemon} selectPokemon={selectPokemon}/>

                    }
                />
              </Main>
            )}

            {!!isOpen && (
                <Modal>
                    <Form 
                        addPokemon = {addPokemon}
                        editPokemon = {editPokemon}
                        deletePokemon = {deletePokemon}
                        setOpenModal = {setOpenModal}
                        action = {action}
                        infoPokemon = {infoPokemon}
                        setInfoPokemon = {setInfoPokemon}
                        active = {active}
                        setActive = {setActive}
                    />
                </Modal>
            )}
        </React.Fragment>
    );
}

export default App;
