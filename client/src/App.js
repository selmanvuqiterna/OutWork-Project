import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from './pages/Home/Home';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }


  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res =>res.text())
    .then(res => this.setState({apiResponse: res}))
  }

  componentWillMount(){
    this.callAPI();
  }


  render(){
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/> 
        <Route />
        <Route />
        <Route />

      </Routes>
    
    </BrowserRouter>
  );
}
}

export default App;
