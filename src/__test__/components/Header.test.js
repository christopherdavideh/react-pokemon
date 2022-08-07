import { render, screen } from '@testing-library/react';
import {Header} from '../../components/Header';

describe('Header component', () => {

    let title;

    test('El titulo del header se renderiza en pantalla', () => {
        render(<Header />);
        title = screen.getByText('Listado de Pokemon');
        expect(title).toBeInTheDocument();
    });

});