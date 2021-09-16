import FooterList from "./FooterList"
import footer from "../styles/scss/Footer.module.scss"
const Footer = () => {
    return (
        <div className = {footer.footerSection}>
            <div className = {footer.footerSectionInner}>
                <div className = {footer.footerNavigations}>
                    <FooterList four="ABOUT" first="How Airbnb Works" second="Newsroom" third="Airbnb 2021" fourth="Investors" fifth="Airbnb Plus" sixth="Airbnb Luxe" seventh="HotelTonight" eighth="Airbnb for Work" nineth="Made possible by Hosts" tenth="Careers" leventh="Founder's Letter"/>
                    <FooterList four="COMMUNITY" first="Diversity & Belonging" second="Accessibility" third="Airbnb Associates" fourth="Host Afghan refugees" fifth="Guest Referrals" sixth="Airbnb.ogg" />
                    <FooterList four="HOST" first="Host your home" second="Host an Online Experience" third="Host an Experience" fourth="Responsible Hosting" fifth="Resource Centre" sixth="Community Centre" />
                    <FooterList four="SUPPORT" first="Our COVID-19 Response" second="Help Centre" third="Cancellation options" fourth="Neighbourhood Support" fifth="Trust & Safety" />
                </div>
            </div>
            <div className = {footer.bottomFooter}>
                <ul className = {footer.bottomUnorder}>
                    <li className = {footer.bottomLists}>2021 Airbnb, Inc</li>
                    <li className = {footer.bottomLists}>. Privacy</li>
                    <li className = {footer.bottomLists}>. Terms</li>
                    <li className = {footer.bottomLists}>. Sitemap</li>
                    <li className = {footer.bottomLists}>. Company details</li>
                </ul>
                <div className = {footer.bottomRight}>
                    <h5>English</h5>
                    <h5>INR</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
