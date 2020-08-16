import React from 'react';
import { Link } from 'react-router-dom';

function header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Homes</Link> | 
            <Link style={linkStyle} to="/About">About</Link>
        </header>
    )
}

const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: '10px'
}

const linkStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: '10px'
}


export default header
