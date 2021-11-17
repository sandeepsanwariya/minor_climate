import React from "react";
import WorldMap from "./pages/WorlMap";
class Map extends React.Component {
  render() {
    return (
        <figure className="map">
            <WorldMap/>
        </figure>
    )
  }
}
export default Map;