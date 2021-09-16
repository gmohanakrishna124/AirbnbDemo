import Image from "next/dist/client/image"
import experience from "../public/images/experiences.jpg"
import onlineExperience from "../public/images/onlineExperiences.jpg"
import wander from "../public/images/wanderlust.jpg"
import discov from "../styles/scss/Discover.module.scss"
const DThingsToDo = ({index,four,desc}) => {
    const images = [experience,onlineExperience,wander];
    return (
        <div className = {discov.homeThirdSectionCards}>
            <div className = {discov.homeThirdSectionImages}>
                <Image className = {discov.homeThirdSectionImagess} src= {images[index]} layout="fill" />
            </div>
            <div className = {discov.homeThirdSectionContent}>
                <h4>{four}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default DThingsToDo
