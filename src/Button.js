import React from 'react'

export const Button = ({color, bg, children}) => (
    <button style={{color: color, backgroundColor: bg}}>{children}</button>
);

