import React from 'react';

function HelloAsFunction ({a,b}){
    return <>Hello {(parseInt(a)+parseInt(b))}</>
}

export default HelloAsFunction;