import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export default class Map extends React.Component{
  componentDidMount(){
    this.map = L.map("map", {
      center: [58, 16],
      zoom: 6
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 20,
      maxNativeZoom: 17,
      detectRetina: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    })
    .addTo(this.map);
  }
  render(){
    return(
        <Wrapper
        width="100%" height="600px" id="map" onClick={()=> this.props.handleLocationInfo()}
        />
    )
  }
}
