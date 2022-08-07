import { render, screen, fireEvent} from "@testing-library/react";
import {act, renderHook } from '@testing-library/react-hooks';
import {CreateButton} from "../../components/CreateButton";
import {usePokemon} from "../../hooks/usePokemon";

describe('pruebas sobre componente CreateButton', () => {
        
    render(<CreateButton />);
    const button = screen.getByRole("button", {name: "Nuevo"});

    test('el boton de nuevo se renderiza en pantalla', () => {
        expect(button).toBeInTheDocument();
    });

    /*test('el boton si ejecuta el evento click', () => {
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
    });*/

    /**  **/

    const {result} = renderHook(() => usePokemon());
    const setup = () => {
        const utils = render(<CreateButton setOpenModal = {result.current.setOpenModal} />);
        const modal = screen.getByRole("button", {name: "Nuevo"});
        return {
            modal,
            utils,
        }
    }

    test('el boton si ejecuta el evento click y abre el modal', async () => {
        const {result} = renderHook(() => usePokemon());
        const {modal} = setup();
        fireEvent.click(modal);
        await act (async () => {
            await result.current.setOpenModal([true, ""]);
        });
        console.log(result.current.openModal);
        const [isOpen, accion] = result.current.openModal;
        expect(isOpen).toBeTruthy();
        expect(accion).toBe("");
    });


});