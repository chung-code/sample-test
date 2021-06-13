import {useCallback, useState, useEffect} from 'react';
import DropDown from '../../components/DropDown';
import axios from 'axios';

import { Line } from "react-chartjs-2";

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "Positive",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)"
//     },
//     {
//       label: "Negative",
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: "#742774"
//     }
//   ]
// };

const constructLineData = (linedata) => {
  let pos_data = linedata.map(ld => {
    if (ld.emotion === "pos") {
      return ld
    }
  })

  let neg_data = linedata.map(ld => {
    if (ld.emotion === "neg") {
      return ld
    }
  })
  return pos_data

  // const data = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //   datasets: [
  //     {
  //       label: "Positive",
  //       data: [33, 53, 85, 41, 44, 65],
  //       fill: true,
  //       backgroundColor: "rgba(75,192,192,0.2)",
  //       borderColor: "rgba(75,192,192,1)"
  //     },
  //     {
  //       label: "Negative",
  //       data: [33, 25, 35, 51, 54, 76],
  //       fill: false,
  //       borderColor: "#742774"
  //     }
  //   ]
  // }
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Positive",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Negative",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
}

const LineChart = () => {
  const [chart_data, setChartData] = useState([])

  const [catList, setCatList] = useState([])
  const [cat, setCat] = useState(["-- Select Category --"]);

  useEffect(
    () => {
      let url = 'http://localhost:5000/good'
      axios.get(url).then(function(response){
        let initialCat = response.data.word
        setCatList(initialCat)
        console.log(initialCat)
      })
    },
    [], // 초기 렌더링 시 가져오는 로직
  );

  const onSelect = useCallback(
    category => {
      console.log(category);
      axios.get(`http://localhost:5000/time/${category}`)
        .then((response) => {
          console.log(constructLineData(response.data));
          setChartData(response.data);
          setCat(category);
        })
        .catch(() => {
          console.log('error');
        });
    },
  );

  return (
      <div>
        <DropDown onSelect={onSelect} catList={catList} cat={cat}/>
        <Line data={data} />
      </div>
    );
}

export default LineChart;