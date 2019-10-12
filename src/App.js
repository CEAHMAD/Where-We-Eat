import React from 'react';

import './App.css';
import { GetResturant } from './componenets/GetResturant';
import Map from './componenets/Map';
import logo from './Assesst/img/logo.png';

 class App extends  React.Component{
   state ={
    suggest: false,
    currentLocation: { lat: "", lng: ""},
    resturantData: {
      error: "", 
      name: "",
      id: "",
      link: "",
      cat: "",
      Ulat: "",
      Ulon: "",
      cat: "",
      catId: "",
      error: "",
      id: "",
      image: [],
      lat: "",
      link: "",
      lon: "",
      name: "",
      open: "",
      rating: ""
    }
   }

   async componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(Position => {
				let lat = Position.coords.latitude;
        let lng = Position.coords.longitude;
        this.setState({currentLocation: {lat, lng}})
				
			});
		}


	}

   getResturant = async () => {

    //  const latLng = this.
    let resturantData =  await GetResturant()
    console.log(resturantData);
    this.setState({ suggest: true, resturantData })
    
  }

  
  render(){
  // this.getResturant()
  let  resturantData = this.state.resturantData
  
  return (
    <div className="container">
					<img src={logo} />
				<div className="section">
        <button className="btn" onClick={this.getResturant}>suggist</button>
      { this.state.suggest?
      <div>
      <h1>name: {resturantData.name}</h1>
      <h3>{resturantData.cat}</h3>
      <h5>{resturantData.rating}</h5>
      <h4><a href={resturantData.link}>Forsequare</a></h4>
      <h4><a href={`https://maps.google.com/?q=${resturantData.lat},${resturantData.lon}`}>Google Map</a></h4>
      <Map mapBound={this.state.currentLocation} markerPostion={{lat: +resturantData.lat, lng: +resturantData.lon}} />
      </div>
    : ""}
      
  
  </div>
			</div>
  )
 }
}

export default App;
