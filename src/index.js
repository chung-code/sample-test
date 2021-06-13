import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


// import App from './views/App';

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";


// 기본코드
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import App from './views/App';
// import Tables from './views/examples/Tables';
// import VerticalBar from './views/examples/VerticalBar';
import CRUD from './views/examples/CRUD';
import Emotion from './views/examples/Emotion';
// import LineChart from './views/examples/LineChart';
import Freq from './views/examples/Freq';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CRUD}/>
      {/* <Route path="table" component={Tables}/>
      <Route path="chart" component={VerticalBar}/> */}
      <Route path="freq" component={Freq}/>
      <Route path="emotion" component={Emotion}/>
      {/* <Route path="line" component={LineChart}/> */}
    </Route>
  </Router>,
  document.getElementById('root')
);


// argon 코드
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Redirect from="/" to="/admin/index" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
