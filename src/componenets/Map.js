import React, { useState, useEffect } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const Map = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCoOSoxJoLOWBUPucEJY3C3P7Suk5o0cSM&libraries=places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>{
    

    return <GoogleMap
    //   defaultZoom={13}
    ref={props.onMapMounted}
        zoom={13}
        
      defaultCenter={props.defaultCenter}
    >
      <Marker position={props.position}  />
    </GoogleMap>}
  )

  
function MapComponent(props){
    const [map, setMap] = useState({})


    function onMapMounted(ref){
        setMap(ref)
    }

    if(window.google){

        let locatioin = new window.google.maps.LatLng(props.markerPostion);
        let bounds = new window.google.maps.LatLngBounds()
  
        bounds.extend(locatioin)
        map.fitBounds(bounds)
    }

    return <Map onMapMounted={onMapMounted} defaultCenter={props.mapBound} position={props.markerPostion}/>




}


  export default MapComponent;