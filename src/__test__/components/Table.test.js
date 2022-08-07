import { render, screen, fireEvent} from "@testing-library/react";
import {Table} from "../../components/Table";
import {Empty} from "../../components/Empty";
import {LoadSkeleton} from "../../components/LoadSkeleton";
import {Item} from "../../components/Item";
describe('pruebas sobre componente Table', () => {

    test('La Tabla se renderiza en pantalla', () => {
        render(
            <Table 
                pokemonList = {[]} 
                onLoading = {() => (<LoadSkeleton />)} 
                onEmpty = {(msg) => <Empty img={""} msg={msg} />}
            />
        );
        const table = screen.getByRole("table");
        expect(table).toBeInTheDocument();
    });

    test('No se muestra contenido de la tabla loading = true', () => {
        render(
            <Table 
                pokemonList = {[]} 
                onLoading = {() => (<LoadSkeleton />)} 
                onEmpty = {(msg) => <Empty img={""} msg={msg} />} 
                loading = {true}
            />
        );
        //const table = screen.getByRole("rowgroup");
        const load = screen.getByText(".");
        expect(load).toBeInTheDocument();
    });
    
    test('se muestra el Componente Empty cuando loading = false y la Lista de pokemons esta vacia', () => {
        render(
            <Table 
                pokemonList = {[]} 
                onLoading = {() => (<LoadSkeleton />)} 
                onEmpty = {(msg) => <Empty img={""} msg={msg} />} 
                loading = {false}
            />
        );
        const empty = screen.getByRole('row', {name: "No se han encontrado resultados para tu búsqueda: undefined"});
        expect(empty).toBeInTheDocument();
    });
    
    test('se muestra la Lista de pokemons en el componente Item', () => {
        render(
            <Table 
                pokemonList = {[{"id":2199,"name":"Pikachu","image":"https://archives.bulbagarden.net/media/upload/thumb/6/60/037Vulpix.png/500px-037Vulpix.png","attack":35,"defense":80,"hp":100,"type":"Base","id_author":1}]} 
                onLoading = {() => (<LoadSkeleton />)} 
                onEmpty = {(msg) => <Empty img={""} msg={msg} />} 
                loading = {false} 
                render = { (pokemon) =>  //console.log(pokemon.title)
                    <Item key={pokemon.id} pokemon= {pokemon} />
                }
            />
        );
        const list = screen.getByRole('img', {name: "Pikachu"});
        expect(list).toBeInTheDocument();
    });

    
});