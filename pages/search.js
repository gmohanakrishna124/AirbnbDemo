import Head from "next/head"
import Image from "next/dist/client/image"
import styles from "../styles/scss/Main.module.scss"
import locationn from "../styles/scss/Locations.module.scss"
import SearchHeader from "../components/SearchHeader"
import Footer from '../components/Footer'
import {useState} from "react"
import {useRouter} from "next/dist/client/router"
import {format} from "date-fns"
import {HeartIcon, StarIcon} from "@heroicons/react/solid"
import ReactMapGl, {Marker, Popup} from "react-map-gl"
import { getCenter } from "geolib"
const search = ({inputResults}) => {
    const router = useRouter();
    const {location,startDate,endDate} = router.query;
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    
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

        <div className = {styles.container}>
             <Head>
                <title>Search</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SearchHeader />
            <section className = {locationn.searchSection}>
                <div className = {locationn.searchSectionLeft}>
                    <div className = {locationn.searchSectionOne}>
                        <p className = {locationn.firstPara}>300 stays {formatedStartDate} - {formatedEndDate} 5-10 guests</p>
                        <h3 className = {locationn.headingThree}>Stays in {location}</h3>
                        <ul className = {locationn.unorderList}>
                            <li className = {locationn.links}><a className = {locationn.anchor} href="/">Type of place</a></li>
                            <li className= {locationn.links}><a className = {locationn.anchor} href="/">price</a></li>
                            <li className = {locationn.links}><a className = {locationn.anchor} href="/">Instant Book</a></li>
                            <li className = {locationn.links}><a className = {locationn.anchor} href="/">Rooms and Beds</a></li>
                            <li className = {locationn.links}><a className = {locationn.anchor} href="/">More filters</a></li>
                        </ul>
                        <p className = {locationn.secondPara}>Review COVID-19 travel restrictions before you book. <a href = "/">Learn more</a></p>
                    </div>
                    <div className = {locationn.searchResults}>
                        {inputResults?.map(({img,location,title,description,star,price,total,long,lat})=>(
                            <div className = {locationn.searchResultsCards} key = {img}>
                                <div className = {locationn.searchResultsImage}>
                                    <Image className = {locationn.iimage} src= {img} layout="fill" />
                                </div>
                                <div className = {locationn.searchResultsContent}>
                                    <div className = {locationn.searchResultsContentTop}>
                                        <div className = {locationn.searchResultsContentLeft}>
                                            <p className = {locationn.fourthPara}>{location}</p>
                                            <h4 className = {locationn.headingFour}>{title}</h4>
                                            <p className = {locationn.fifthPara}>{description}</p>
                                        </div>
                                        <div className = {locationn.searchResultsContentRight}>
                                            <HeartIcon className = {locationn.heatIcon}/>
                                        </div>
                                    </div>
                                    <div className = {locationn.searchResultsContentBottom}>
                                        <div className = {locationn.searchResultsStarIcon}>
                                            <div className = {locationn.SStarIcon}>
                                                <StarIcon />
                                            </div>
                                            <p className = {locationn.ratingg}>{star}</p>
                                        </div>
                                        <div className = {locationn.searchResultsPrice}>
                                            <h2 className = {locationn.rightBottomHeadingTwo}>{price}</h2>
                                            <h3 className = {locationn.rightBottomHeadingThree}>{total}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className = {locationn.searchSectionRightt}>
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
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default search;

export async function getServerSideProps(){
    const inputResults = await fetch("https://jsonkeeper.com/b/5NPS").
        then((res)=> res.json());
    
    return{
        props:{
            inputResults
        }
    }
}