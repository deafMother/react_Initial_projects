// useState()will give access to component level state
import React, { useState } from 'react';
import ResouceList from './ResourceList';
import SecondComp from './SecondComp';

const App = () => {
  const [resource, setResource] = useState('posts'); // array destructuring
  const [name, setName] = useState('David'); // array destructuring
  // we can multipe state objects just like in class components, but the method used for
  // updating must be different
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setResource('posts');
            setName('Gun');
          }}
        >
          Post
        </button>
        <button
          onClick={() => {
            setResource('todos');
            setName('Book');
          }}
        >
          Todos
        </button>
      </div>
      {resource} {name}
      {
        //<SecondComp resource={resource} />
      }
      <ResouceList resource={resource} />
    </div>
  );
};

export default App;
