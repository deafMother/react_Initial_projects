// import the react and react-dom libraries

import React from 'react';
import ReactDom from 'react-dom';

// create a react component
const App = function(){

    let getNam = ()=>{
        return 'OK'
    }

    let getTime = ()=>{
        return (new Date()).toLocaleTimeString();
    }

    return (
    <div>
            <label htmlFor='name' className = 'label'>Name: </label>
        <input id = 'name'></input>
        <button style = {{boxSizing:'border-box',background: 'blue', color:'white', border:'none'}}>
        {getNam()}
        </button>
        <h4>{getTime()}</h4>
    </div>
    );
};




// display the react component  on the screen
ReactDom.render(
    <App/>,
    document.querySelector('#root')
);