import React, {Component, useState, useEffect} from 'react'
import { render } from 'react-dom';
import VerticalBar from './VerticalBar.jsx';
import Tables from './Tables.jsx'

// var faker = require('faker');
// import useFetch from './useFetch.js';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => {

  const [todos, setTodos] = useState([]);

  const fetchInitialData = async() => {
    const response = await fetch('http://localhost:5000/get'); //미리 만들어놓은 api 서버
    const initialData = await response.json();
    setTodos(initialData);
  }

  useEffect( () => {
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

  let columns = ["word", "frequency"];
  let words = todos.index;
  let fres = todos.data;

  let data = []
  if (words){ //비동기처리 대박
  for(var i = 0; i < words.length; i++) {
    var dic = {word: words[i], fre: fres[i]};
    (data.push(dic));
    };
  };

  return (
    <div style={styles}>
      <VerticalBar todos={todos} />
      <Tables columns={columns} data={data}/>
    </div>
  )
}

export default App;
