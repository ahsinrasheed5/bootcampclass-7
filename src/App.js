import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  let data = {title: "Waiting for Data from server"};
  const [todo , setTodo] = useState(data);
  const [isData , setData]  = useState(false);
  const [isFetching , setFetching] = useState(false);


  
  useEffect( ()=>{
    async function fetchData(){
      setFetching(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      console.log( "Response = " ,response);
      let data2 = await response.json()
      setTodo(data2);
      setFetching(false);
      console.log( "Data = ", todo);
    }
    fetchData();
  },[isData]);

  if(isFetching){
    return <div>Data Loading...</div>
  }

  return (
    <div>
      Hello Fetch 
      <span> title: {todo.title}</span>
    </div>
  );
}

export default App;
