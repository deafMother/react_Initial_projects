import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);
  // useEffect is called each time the component is rendered
  useEffect(() => {
    console.log('[UseEffect] fired');
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data); // immediately invoked function
    })(resource);
  }, [resource]); // if resrource value is diffent then its pre value then the arrow function inside useEffect is called

  return resources;
};

const ResouceList = ({ resource }) => {
  console.log('[ResourceList.js] rendered...');
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResouceList;
