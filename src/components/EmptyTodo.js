import React from 'react';
import '../css/main.css'

function EmptyTodo (props) {
        return(
        <tr>
            <td colSpan={5}>
                <p>{props.msg}</p><br />
                <img src={props.img} alt='Graphic to reference todo' width="250" height="270"/>
            </td>
        </tr>
    );
}

export {EmptyTodo};