import { render, screen, fireEvent} from "@testing-library/react";
import {act, renderHook } from '@testing-library/react-hooks';
import {Search} from "../../components/Search";
import {usePokemon} from "../../hooks/usePokemon";

describe('pruebas sobre componente Search', () => {

    test('el input de busqueda se renderiza en pantalla', () => {
        render(<Search />);
        const inputSearch = screen.getByPlaceholderText('Buscar');
        expect(inputSearch).toBeInTheDocument();
    });

    test('el input de busqueda esta deshabilitado mientras loading = true', () => {
        render(<Search loading={true}/>);
        const inputSearch = screen.getByPlaceholderText('Buscar');
        expect(inputSearch).toBeDisabled();
    });
    
    test('el input de busqueda esta habilitado mientras loading = false', () => {
        render(<Search loading={false}/>);
        const inputSearch = screen.getByPlaceholderText('Buscar');
        expect(inputSearch).toBeEnabled();
    });

    /** Prueba del evento onchangre del elemento input del componente Search  **/
    
    const {result} = renderHook(() => usePokemon());
    const setup = () => {
        const utils = render(<Search onChange = {result.current.onChange}/>);
        const input = screen.getByPlaceholderText('Buscar');
        return {
        input,
        ...utils,
        }
    }

    it('Si esta tomando los valores ingresados', () => {
        const {input} = setup();
        const {result} = renderHook(() => usePokemon());
        fireEvent.change(input, {target: {value: 'Pikachu'}});
        act(() => {
            //console.log(input.value);
            result.current.onChange(input.value);
        });
        expect(result.current.searchValue).toBe(input.value);;
    });

    test('Comprobando si funciona cuando el valor cambia', () => {
        const {input} = setup();
        const {result} = renderHook(() => usePokemon());
        fireEvent.change(input, {target: {value: 'Pikachuuuuuu'}});
        act(() => {
            result.current.onChange(input.value);
        });
        expect(result.current.searchValue).toBe(input.value);;
    });
        
    test('Comprobando si cambia el valor al borrar', () => {
        const {input} = setup();
        const {result} = renderHook(() => usePokemon());
        fireEvent.change(input, {target: {value: 'Bulbasour'}});
        act(() => {
            result.current.onChange(input.value);
        });
        console.log(input.value);
        console.log(`useState: ${result.current.searchValue}`);
        expect(result.current.searchValue).toBe(input.value);

        fireEvent.change(input, {target: {value: ''}});
        act(() => {
            result.current.onChange(input.value);
        });
        expect(result.current.searchValue).toBe(input.value);
    }); 
});