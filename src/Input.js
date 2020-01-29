import React from "react";

const Input = ( { onChange, value } ) => (
    <input type="text" onChange={ event => onChange( event.target.value ) } value={ value }/>
);

export default Input;