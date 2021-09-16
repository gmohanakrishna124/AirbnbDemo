import footer from "../styles/scss/Footer.module.scss"
const FooterList = (props) => {
    return(
        <div className ={footer.footerSectionInnerNavigations}>
            <h4>{props.four}</h4>
            <ul>
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.third}</li>
                <li>{props.fourth}</li>
                <li>{props.fifth}</li>
                <li>{props.sixth}</li>
                <li>{props.seventh}</li>
                <li>{props.eighth}</li>
                <li>{props.nineth}</li>
                <li>{props.tenth}</li>
                <li>{props.leventh}</li>
            </ul>
        </div>
    )
}

export default FooterList
