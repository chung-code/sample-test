// import React, { useEffect, useState } from 'react';
// import Select from 'react-select'
// import axios from 'axios'
// import LineChart from './LineChart.js'

// function LineSelect(){
//     const [options, setOptions] = useState([])
//     const [selectedOption, setSelectedOption] = useState({label: "category_of_reason", value: "category_of_reason"});

//     // select option
//     useEffect(() => {
//         axios.get(`http://localhost:5000/good`)
//         .then(res => setOptions(res.data))
//         .catch(err => console.log(err))
//     }, []);
    
//     // style
//     return (
//       <div>
//         <Select
//           defaultValue={selectedOption}
//           onChange={setSelectedOption}
//           options={options}
//         />
//         <LineChart
//           filters = {selectedOption}
//         />
//       </div>
//     );
// };

// export default LineSelect