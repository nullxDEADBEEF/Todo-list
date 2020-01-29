import React from "react";

const Button = ( { children, ...rest } ) => (
    <button className={ rest.className } { ...rest }>
        { children }
    </button>
)

export default Button;