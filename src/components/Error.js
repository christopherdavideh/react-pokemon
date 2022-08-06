import React from "react";

function Error (props) {
    /*const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true
    })
    Toast.fire({
        icon: 'error',
        title: `Error! ${props.error}`
    });*/

    return(
        <img className="error-img" src={""} alt="Error 500 - Internal Server" width={550} height={550}/>
    );

}

export {Error};