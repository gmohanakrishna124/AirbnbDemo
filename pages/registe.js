import Head from "next/head"
import RegisterHeader from "../components/RegisterHeader"
import Footer from "../components/Footer"
import styles from "../styles/scss/Main.module.scss"
import registerStyle from "../styles/scss/Register.module.scss"
import { useState } from "react"
import {useRouter} from "next/dist/client/router"
const  registe = () => {
    const [name , setName] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [pricing, setPricing] = useState("");
    const router = useRouter("");

    const registerUser = async event =>{
        event.preventDefault();
        const res =  await fetch("/registe",{
            body: JSON.stringify({
                name : name,
                userName : userName,
                userEmail : userEmail,
                userPassword : userPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        })

        const result = await res.json();
    }
       return (
        <div className = {styles.container}>
            <Head>
                <title>Register</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RegisterHeader />
            <main className = {registerStyle.registerMainSection}>
                <div className = {registerStyle.registerMainSectionInner}>
                    <section className = {registerStyle.registerMainSectionInnerHeader}>
                        <h2 className = {registerStyle.registerMainHeaderHeadingTwo}>Create a free account</h2>
                        <p className = {registerStyle.registerMainHeaderfirstPara}>Go anywhere, live anywhere, host homes, become a host, request guests</p>
                    </section>
                    <form onSubmit= {registerUser} className = {registerStyle.registerMainSectionform}>
                        <div className = {registerStyle.registerMainSectionformHeader}>
                            <p className = {registerStyle.registerMainFormFirstPara}>Sign up with</p>
                            <div className = "">
                               
                            </div>
                        </div>

                        <div className = {registerStyle.registerMainSectionFormSubHeader}>
                            <div className = {registerStyle.registerMainSubHeaderFirstCard}></div>
                            <p className = {registerStyle.registerMainSubHeaderFirstPara}> use email to signup</p>
                            <div className = {registerStyle.registerMainSubHeaderFirstCard}></div>
                        </div>

                        <div className = {registerStyle.registerMainSectionFormMain}>
                            <div className = {registerStyle.registerMainSectionFormMainInner}>
                                <p className = {registerStyle.registerMainSectionInnerHeading}>Name</p>
                                <input className = {registerStyle.registerMainSectionInnerInput} type="text" name="name" placeholder="Enter Name" required onChange = {(e)=>{ setName(e.target.value)}}/>
                            </div>
                            <div className = {registerStyle.registerMainSectionFormMainInner}>
                                <p className = {registerStyle.registerMainSectionInnerHeading}>Username</p>
                                <input className = {registerStyle.registerMainSectionInnerInput} type="text" name="username" placeholder="Enter Userame" required onChange = {(e)=>{ setUserName(e.target.value)}} />
                            </div>
                            <div className = {registerStyle.registerMainSectionFormMainInner}>
                                <p className = {registerStyle.registerMainSectionInnerHeading}>Email address</p>
                                <input className = {registerStyle.registerMainSectionInnerInput} type="email" name="email" placeholder="Enter Email Address" required onChange = {(e)=>{setUserEmail(e.target.value)}}/>
                            </div>
                            <div className = {registerStyle.registerMainSectionFormMainInner}>
                                <p className = {registerStyle.registerMainSectionInnerHeading}>Password</p>
                                <input className = {registerStyle.registerMainSectionInnerInput} type="password" name="password" placeholder="Enter Password" required onChange = {(e)=>{setUserPassword(e.target.value)}}/>
                            </div>
                        </div>

                        <div className = {registerStyle.registerMainSectionFormSumbit}>
                            <button type= "submit" onclick = {()=>{router.push("/")}}>Create Account</button>
                        </div>
                        <p className = {registerStyle.registerMainSectionFooter}>By sigining up you Agree to Airbnb <a href= "#">Terms of Service</a></p>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default registe
export async function handler(req,res){
    const name = req.body.name;
    const userName = req.body.userName;
    res.send(200).json({
        namee : name,
        userNamee : userName,
    });
}