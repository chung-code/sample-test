import React, { useState, useEffect } from "react";
import ReactWordcloud from 'react-wordcloud';

// const options = {
//     colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
//     enableTooltip: true,
//     deterministic: false,
//     fontFamily: "impact",
//     fontSizes: [5, 60],
//     fontStyle: "normal",
//     fontWeight: "normal",
//     padding: 1,
//     rotations: 3,
//     rotationAngles: [0, 90],
//     scale: "sqrt",
//     spiral: "archimedean",
//     transitionDuration: 1000
//   };

const Emotion = () => {
    const [todos, setTodos] = useState([]);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      console.log("=== useEffect ===");
  
      const fetchInitialData = async () => {
        setIsError(false);
        try {
          const response = await fetch("http://localhost:5000/emotion"); //미리 만들어놓은 api 서버
          const initialData = await response.json();
          setTodos(initialData);
        } catch (error) {
          setIsError(true);
        }
      };
  
      fetchInitialData();
    }, []);
    
    const words = todos
    console.log(words)

    const callbacks = {
        getWordColor: word => word.pos > word.neg ? "blue" : "red",
        onWordClick: console.log,
        onWordMouseOver: console.log,
        getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 10 ? "good" : "bad"}]`,
    }

    const options = {
        fontSizes: [50, 120],
        rotations: 2,
        rotationAngles: [-90, 0],
    };

    const size = [800, 500];

    return (
      <div style={{height: 400, width: 600}}>    
        <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        words={words}
        />
      </div>
    )
}

export default Emotion