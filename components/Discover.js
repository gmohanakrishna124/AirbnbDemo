import DThingsToDo from "./DThingsToDo"
import discov from "../styles/scss/Discover.module.scss"
const Discover = () => {
    return (
        <div className = {discov.homeThirdSection}>
            <h2>Discover things to do </h2>
            <div className = {discov.homeThirdSectionInner}>
                <DThingsToDo index="0" four="Experiences" desc="Find unforgettable activities near you." />
                <DThingsToDo index="1" four="Online Experiences" desc="Live, interactive activities led by Hosts."/>
                <DThingsToDo index="2" four="Featured collection: Wanderlust" desc="Travel from home with Online Experiences."/>
            </div>
        </div>
    )
}

export default Discover
