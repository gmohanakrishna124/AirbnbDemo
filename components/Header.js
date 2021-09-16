import navigation from "../styles/scss/Navigation.module.scss"
const Header = () => {
    return (
        <header className = {navigation.headerContainer}>
            <p className = {navigation.headerContainerPara}><a href="/" className = {navigation.headerContainerAnchor}>Get the latest on our COVID-19 responses</a></p>
        </header>
    )
}

export default Header;
