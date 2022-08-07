import React from 'react';
import '../css/main.css'

function Empty (props) {
        return(
        <tr>
            <td colSpan={5}>
                <p>{props.msg}</p><br />
            </td>
        </tr>
    );
}

export {Empty};