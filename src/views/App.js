import React, {Component, useState, useEffect} from 'react'
// import { render } from 'react-dom';
// import VerticalBar from './examples/VerticalBar.jsx';
// import Tables from './examples/Tables.jsx'
// import classnames from "classnames";

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };

// const App = () => {

//   const [todos, setTodos] = useState([]);
//   const [isError, setIsError] = useState(false);

//   useEffect( () => {
//   console.log('=== useEffect ===');

//   const fetchInitialData = async() => {
//     setIsError(false);
//     try {
//       const response = await fetch('http://localhost:5000/get'); //미리 만들어놓은 api 서버
//       const initialData = await response.json();
//       setTodos(initialData);
//     }
//     catch (error) {
//     setIsError(true);
//     }
//   }

//     fetchInitialData(); 
//   }, [])

//   return (
//     <div style={styles}>
//       <VerticalBar todos={todos} />
//       <Tables todos={todos} />
//     </div>
//   )
// }

// export default App;


import Header from '../components/Header';

const App = ( ) => {

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

  return (
    <div>
      <Header todos={todos}/>
    </div>
  );
}

export default App;
