import {useState} from "react"
import ReactMapGl, {Marker, Popup} from "react-map-gl"
import { getCenter } from "geolib"
const Map = ({inputResults}) => {
    const coordinates = inputResults.map((result)=>({
        longitude : result.long,
        latitude : result.lat,
    }));
    const center = getCenter(coordinates);
    const [selectedLocation, setSelectedLocation] = useState("")
    const [viewPort, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude : center.latitude,
        longitude: center.longitude,
        zoom : 11,
    });
    return (
        <ReactMapGl
            mapStyle = "mapbox://styles/gmkrowdy/cktkurkh28i2q17qa499jczww"
            mapboxApiAccessToken = "pk.eyJ1IjoiZ21rcm93ZHkiLCJhIjoiY2t0amt5OThwMWQwbDJwbXJ4bW00Y25uNiJ9.h6DOHbnALNwMRKh_CgkaOA"
            {...viewPort}
            onViewPortChange = {(nextViewPort)=>{setViewPort(nextViewPort)}}
        >
            {inputResults.map((result)=>{
                <div key = {result.long}>
                    <Marker
                        longitude = {result.long}
                        latitude = {result.lat}
                        offsetLeft = {-20}
                        offsetTop = {-10}
                    >
                        <p 
                            role = "img"
                            onClick = {()=> setSelectedLocation(result)}
                            aria-label = "push-pin"
                        >

                        </p>
                    </Marker>
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose = {()=>{setSelectedLocation({})}}
                            closeOnClick = {true}
                            latitude = {result.lat}
                            longitude = {result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            })}
        </ReactMapGl>
    )
}

export default Map
