import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
// import useFetch from '../useFetch.js';

let data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 5, 5, 5, 5, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => {
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log("=== useEffect ===");

    // const loading = useFetch(setTodos, 'http://localhost:5000/get'); //분리된 customhook 사용

    const fetchInitialData = async () => {
      setIsError(false);
      try {
        const response = await fetch("http://localhost:5000/get"); //미리 만들어놓은 api 서버
        const initialData = await response.json();
        setTodos(initialData);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchInitialData();
  }, []);

  // let BarChart = <div>loading...</div>
  // if(!loading) BarChart = () => {
  //   data.labels = todos.index.slice(0,6);
  //   data.datasets[0].label = '# of ' + todos.name;
  //   data.datasets[0].data = todos.data.slice(0,6);

  //   return(
  //     <Bar data={data} options={options} />
  //   )
  // }

  if (todos.index) {
    //비동기처리 대박
    data.labels = todos.index.slice(0, 6);
    data.datasets[0].label = "# of " + todos.name;
    data.datasets[0].data = todos.data.slice(0, 6);
  }

  return (
    <>
      <div className="header">
        <h1 className="title">Frequencies of Word</h1>
        <a>Vertical Bar Chart</a>
      </div>
      <Bar data={data} options={options} />
      {/* <BarChart /> */}
    </>
  );
};

export default VerticalBar;
