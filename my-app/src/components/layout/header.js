import React from 'react';

function Header() {

    return (
        <header style = {headerStyle}>
            <h1>
                TodoList
            </h1>
        </header>


    )
}

const headerStyle = {
    background:'#333',
    color: 'grey',
    fontWeight: 'bold',
    padding:'10px',
    textAlign: 'center'


}

export default Header;