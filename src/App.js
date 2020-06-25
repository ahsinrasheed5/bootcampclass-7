import React, { useEffect } from 'react';
import './App.css';

function App(){

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json))

  })



  return (
    <div className='App'>
      <h1>Hello World </h1>
    </div>
    );

}

export default App;



