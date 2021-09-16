import Image from "next/dist/client/image"
import {GlobeAltIcon, MenuIcon, UserCircleIcon, SearchCircleIcon,PlusCircleIcon, MinusCircleIcon} from "@heroicons/react/solid"
import BannerStyle from "../styles/scss/SearchHeader.module.scss"
import airbnbLogo from "../public/images/airbnbLogo.png"
import {useState} from "react"
import {useRouter} from "next/router"
import { format } from "date-fns"
const SearchHeader = () => {
    const [searchClick, setSearchClick] = useState("");
    const [addGuests, setAddGuests] = useState("Add");
    const [guests, setGuests] = useState("guests");
    const [test, setTest] = useState("");
    const [initalData, setInitalData] = useState(0);
    const [secondData, setSecondData] = useState(0);
    const [thirdData, setThirdData] = useState(0);
    const [starttDate, setStarttDate] = useState("");
    const [enddDate, setEnddDate] = useState("");
    const router = useRouter();
    const {location,startDate,endDate} = router.query;
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const openSearch = ()=>{
        setSearchClick("openSearchBar");
    }
    const closeGuests = ()=>{
        setTest("");
    }
    const getData = ()=>{ 
        setTest("guests");
    }
    return (
        <div>
            <div className = {BannerStyle.heroBannerSectionMain}>
                <nav className = {BannerStyle.BannerSectionNavigation}>
                    <div className = {BannerStyle.BannerNavigationLogoSection}>
                        <div className = {BannerStyle.BannerNavigationLogo}>
                            <Image src= {airbnbLogo}  alt= "airbnbLogo" onClick = {()=>{router.push("/")}}/>
                        </div>
                        <h4 className = {BannerStyle.BNLogoHeadingFour} onClick = {()=>{ router.push("/")}}>Airbnb</h4>
                    </div>
                    <div className = {BannerStyle.BannerNavigationCenterLinks}>
                        <div className = {BannerStyle.search} onClick={openSearch}>
                            <h5>{location}</h5>
                            <h5>{formatedStartDate}-{formatedEndDate}</h5>
                            <h5>6 Guests</h5>
                            <p>Search</p>
                        </div>
                    </div>
                    <div className = {BannerStyle.BannerNavigationRightLinks}>
                        <p><a href="#">Become a host</a></p>
                        <div className = {BannerStyle.BNGlobeIcon}>
                            <GlobeAltIcon />
                        </div>
                        <div className = {BannerStyle.BNMenuAndUserIcon}>
                            <div className = {BannerStyle.BNMenuIcon}>
                                <MenuIcon />
                            </div>
                            <div className = {BannerStyle.BNUserIcon}>
                                <UserCircleIcon />
                            </div>
                        </div>
                    </div>
                </nav>
            
                <div className = {BannerStyle.secondSection}>
                    {searchClick && (
                        <nav className = {BannerStyle.BannerSearchEngineSection}>
                            <div className = {BannerStyle.BSEngineNavigations}>
                                <div className = {BannerStyle.BSEngineNavigationItems}>
                                    <p className = {BannerStyle.BSEngineParagraph}>Location</p>
                                    <form className = {BannerStyle.BSEngineForm}>
                                        <input type = "text" name = "localtion" value = {location} />
                                    </form>
                                </div>
                                <div className = {BannerStyle.BSEngineNavigationItems}>
                                    <p className ={BannerStyle.BSEngineParagraph} >Check in</p>
                                    <form className = {BannerStyle.BSEngineForm}>
                                        <input type = "date" name = "chooseDate" placeholder = "Add Dates"  onChange = {(e) =>{setStarttDate(e.target.value)}}/>
                                    </form>
                                </div>
                                <div className = {BannerStyle.BSEngineNavigationItems}>
                                    <p className = {BannerStyle.BSEngineParagraph}>Check out</p>
                                    <form className = {BannerStyle.BSEngineForm}>
                                        <input type = "date" name = "chooseDate"  value = {formatedStartDate}  onChange = {(e) =>{setEnddDate(e.target.value)}}/>
                                    </form>
                                </div>
                                <div className = {BannerStyle.BSEngineNavigationItems} >
                                    <p className = {BannerStyle.BSEngineParagraph}>Guests</p>
                                    <p style={{padding:0,margin:0}} onClick = {getData}>{initalData+secondData+thirdData} {guests}</p>
                                </div>
                                <div className = {BannerStyle.BSEngineSearchIcon}>
                                    <button className = {BannerStyle.BSEngineSearch}type="button">Search</button>
                                </div>
                            </div>
                            {test && (
                                <div className = {BannerStyle.guestsSection}>
                                    <div className = {BannerStyle.guestsCards}>
                                        <div className = {BannerStyle.leftGuest}>
                                            <h5>Adults</h5>
                                            <p>Ages 13 0r above</p>
                                        </div>
                                        <div className = {BannerStyle.rightGuest}>
                                            <p className = {BannerStyle.minusIcon} onClick = {()=>{setInitalData(initalData-1)}}>Del</p>
                                            <p className = {BannerStyle.value}>{initalData}</p>
                                            <p className = {BannerStyle.plusIcon} onClick = {()=>{setInitalData(initalData+1)}}>Add</p>
                                        </div>
                                    </div>
                                    <div className = {BannerStyle.guestsCards}>
                                        <div className = {BannerStyle.leftGuest}>
                                            <h5>Children</h5>
                                            <p>Age 2-12</p>
                                        </div>
                                        <div className = {BannerStyle.rightGuest}>
                                            <p className = {BannerStyle.minusIcon} onClick= {()=>{setSecondData(secondData-1)}}>Del</p>
                                            <p className = {BannerStyle.value}>{secondData}</p>
                                            <p className = {BannerStyle.plusIcon} onClick= {()=>{setSecondData(secondData+1)}}>Add</p>
                                        </div>
                                    </div>
                                    <div className = {BannerStyle.guestsCards}>
                                        <div className = {BannerStyle.leftGuest}>
                                            <h5>Infants</h5>
                                            <p>Under 2</p>
                                        </div>
                                        <div className = {BannerStyle.rightGuest}>
                                            <p className = {BannerStyle.minusIcon} onClick= {()=>{setThirdData(thirdData-1)}}>Del</p>
                                            <p className = {BannerStyle.value}>{thirdData}</p>
                                            <p className = {BannerStyle.plusIcon} onClick= {()=>{setThirdData(thirdData+1)}}>Add</p>
                                        </div>
                                    </div>
                                    <button type="button" onClick = {closeGuests}>Close</button>
                                </div>
                            )}
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchHeader
