import Image from "next/image"
import {GlobeAltIcon, MenuIcon, UserCircleIcon, SearchCircleIcon,PlusCircleIcon, MinusCircleIcon} from "@heroicons/react/solid"
import airbnbLogo from "../public/images/airbnbLogoOne.png"
import BannerStyle from "../styles/scss/Banner.module.scss"              
import {useState} from "react"
import { useRouter } from "next/router"
const Banner = () => {
    const [name, setName] = useState("");
    const [searchData, setSearchData] = useState("");
    const [addGuests, setAddGuests] = useState("Add");
    const [guests, setGuests] = useState("guests");
    const [test, setTest] = useState("");
    const [initalData, setInitalData] = useState(0);
    const [secondData, setSecondData] = useState(0);
    const [thirdData, setThirdData] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const router = useRouter();
    const {userName} = router.query;
    const searchh = ()=>{
        router.push({
            pathname : "/search",
            query:{
                location : searchData,
                startDate : startDate,
                endDate : endDate,
            },
        });
    };
    const getData = ()=>{ 
        setTest("guests");
    }
    const closeGuests = ()=>{
        setTest("");
    }
    
    return (
        <div className = {BannerStyle.heroBannerSection}>
            <div className = {BannerStyle.heroBannerSectionMain}>
                <nav className = {BannerStyle.BannerSectionNavigation}>
                    <div className = {BannerStyle.BannerNavigationLogoSection}>
                        <div className = {BannerStyle.BannerNavigationLogo}>
                            <Image src= {airbnbLogo}  alt= "airbnbLogo" />
                        </div>
                        <h4 className = {BannerStyle.BNLogoHeadingFour}>Airbnb</h4>
                    </div>
                    <div className = {BannerStyle.BannerNavigationCenterLinks}>
                        <h4 className= {BannerStyle.BNHeadingFour}><a href="/">Places to stay</a></h4>
                        <h4 className= {BannerStyle.BNHeadingFour}><a href="/">Experiences</a></h4>
                        <h4 className= {BannerStyle.BNHeadingFour}><a href="/">Online Experiences</a></h4>
                    </div>
                    <div className = {BannerStyle.BannerNavigationRightLinks}>
                        <p onClick ={()=>{router.push("/registe")}}>Create An Account</p>
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
                <nav className = {BannerStyle.BannerSearchEngineSection}>
                    <div className = {BannerStyle.BSEngineNavigations}>
                        <div className = {BannerStyle.BSEngineNavigationItems}>
                            <p className = {BannerStyle.BSEngineParagraph}>Location</p>
                            <form className = {BannerStyle.BSEngineForm}>
                                <input type = "text" name = "localtion" placeholder = "Where are you going?" onChange = {(e)=>{setSearchData(e.target.value)}}/>
                            </form>
                        </div>
                        <div className = {BannerStyle.BSEngineNavigationItems}>
                            <p className ={BannerStyle.BSEngineParagraph} >Check in</p>
                            <form className = {BannerStyle.BSEngineForm}>
                                <input type = "date" name = "chooseDate" placeholder = "Add Dates"  onChange = {(e) =>{setStartDate(e.target.value)}}/>
                            </form>
                        </div>
                        <div className = {BannerStyle.BSEngineNavigationItems}>
                            <p className = {BannerStyle.BSEngineParagraph}>Check out</p>
                            <form className = {BannerStyle.BSEngineForm}>
                                <input type = "date" name = "chooseDate" placeholder = "Add Dates"  onChange = {(e) =>{setEndDate(e.target.value)}}/>
                            </form>
                        </div>
                        <div className = {BannerStyle.BSEngineNavigationItems} >
                            <p className = {BannerStyle.BSEngineParagraph}>Guests</p>
                            <p style={{padding:0,margin:0}} onClick = {getData}>{initalData+secondData+thirdData} {guests}</p>
                        </div>
                        <div className = {BannerStyle.BSEngineSearchIcon}>
                            <button className = {BannerStyle.BSEngineSearch}type="button" onClick = {searchh}>Search</button>
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
                <main className = {BannerStyle.BannerHeroSection}>
                    <div className = {BannerStyle.BannerHerSectionVideo}>
                        <video autoPlay muted loop>
                            <source src= "https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className = {BannerStyle.BannerHeroSectionContent}>
                        <h4 >Hosting</h4>
                        <h4 className = {BannerStyle.heroSectionHeadingFour}>makes Airbnb,</h4>
                        <h4>Airbnb</h4>
                        <div>
                            <button>Try Hosting</button>
                        </div>
                    </div>
                </main>
                <footer className = {BannerStyle.PrivacySection}>
                    <div className = {BannerStyle.PrivacySectionInner}>
                        <h5>Your Privacy </h5>
                        <div className = {BannerStyle.PrivacySectionContent}>
                            <p className = {BannerStyle.PrivacyParagraph}>We use cookies and similar technologies to help personalise content, tailor and measure ads, and provide a better experience. By 
                            clicking OK or turning an option on in Cookie Preferences, you agree to this, as outlined in our <a href="/cooke policy" >Cookie Policy</a>. To change 
                            preferences or withdraw consent, please update your Cookie Preferences.</p>                           
                            <div className = {BannerStyle.PrivacySectionButtons}>
                                <div className = {BannerStyle.PrivacySectionButtonOne}>
                                    <button className = {BannerStyle.PrivacySectionOne} type = "button">Cookie Preferences</button>
                                </div>
                                <div className = {BannerStyle.PrivacySectionButtonTwo}>
                                    <button className = {BannerStyle.PrivacySectionTwo} type = "button">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Banner
