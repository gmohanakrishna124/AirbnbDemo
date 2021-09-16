import Image from "next/dist/client/image"
import airbnbLogo from "../public/images/airbnbLogoOne.png"
import regstyle from "../styles/scss/RegisterHeader.module.scss"
import { useRouter } from "next/router"
const RegisterHeader = () => {
    const router = useRouter();
    return (
      <nav className = {regstyle.registerNavigation}>
          <div className = {regstyle.registerNavigationLeft}>
              <div className = {regstyle.registerNavigationLeftImage}>
                  <Image  className = {regstyle.registerNavigationLeftImageInner} src ={airbnbLogo} layout = "fill" />
              </div>
              <h4 style = {{cursor: "pointer"}} onClick = {()=>{router.push("/")}}>Airbnb</h4>
          </div>
          <div className = {regstyle.registerNavigationCenter}>
              <p className = {regstyle.registerNavigationCenterPara}>Search</p>
          </div>
          <div className = {regstyle.registerNavigationRight}>
              <h5>Login</h5>
              <h5>Brwose Plans</h5>
          </div>
      </nav>
    )
}

export default RegisterHeader
