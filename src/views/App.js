import React, {Component, useState, useEffect} from 'react'
import { render } from 'react-dom';
import VerticalBar from './examples/VerticalBar.jsx';
import Tables from './examples/Tables.jsx'
// import classnames from "classnames";

// var faker = require('faker');
// import useFetch from './useFetch.js';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => {

  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect( () => {
  console.log('=== useEffect ===');

  const fetchInitialData = async() => {
    setIsError(false);
    try {
      const response = await fetch('http://localhost:5000/get'); //미리 만들어놓은 api 서버
      const initialData = await response.json();
      setTodos(initialData);
    }
    catch (error) {
    setIsError(true);
    }
  }

    fetchInitialData(); 
  }, [])
  
  // useEffect( () => {
  //   console.log("새로운내용", todos);
  // }, [])

  // const columns = ["Name", "Email", "Phone"]

  // const data = Array(53)
  //   .fill()
  //   .map(() => ({
  //     name: faker.name.lastName() + faker.name.firstName(),
  //     email: faker.internet.email(),
  //     phone: faker.phone.phoneNumber(),
  //   }))

  console.log('=== render ===');
  console.log('todos', todos);
  console.log('isError', isError);

//   if (todos.index !== undefined) {
//     console.log('length', todos.index.slice(0,3))
// }

  return (
    <div style={styles}>
      <VerticalBar todos={todos} />
      <Tables todos={todos} />
    </div>
  )
}

export default App;
