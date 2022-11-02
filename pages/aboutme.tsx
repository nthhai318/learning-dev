import { ReactElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGit, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { profile } from "console";


const AboutMe = () => {
    return (
        <>
            <header>
            <h1>About Me</h1>
            </header>   
            <main id="Intro">
                <h2>NGO THE HAI</h2>
                <p>Check me out via <Link href="https://www.facebook.com/ngo.t.hai.97" ><FontAwesomeIcon icon={faFacebook} className="social-icon"/></Link> <Link href="https://twitter.com/HaiNgo87853620"><FontAwesomeIcon icon={faTwitter} className="social-icon" /></Link> <Link href="https://github.com/nthhai318"><FontAwesomeIcon icon={faGit} className="social-icon" /></Link></p> 
                <Image
                    alt="profile"
                    src={"/profile.jpg"}
                    width={1000}
                    height={1000}
                    style={{maxWidth: "100%", height: "auto"}}
                    id="profile-pic"
                />
                
                <p>My name is Ngo The Hai. I&lsquo;m a 29-year old up-and-coming fresher web developer from Hanoi, Vietnam.</p>
                <p>Although graduated from a Finance background, I have a strong enthusiasm and passion for Internet technology in general, especially web builder. That is why I quit a well-paid financial job to commit fulltime to become a web developer. To me, it is great that there are always new exciting things to learn as the web is constantly evolving and improving.</p>
                <p>My objective is to create attractive, well-built website, thus deliver exellent experience for the client and contribute to the development of my future employer company</p>
                <h3>Technical Tools:</h3>
                <ul>
                    <li className="skills">HTML</li>
                    <li className="skills">Javascript</li>
                    <li className="skills">CSS</li>
                    <li className="skills">React.js</li>
                    <li className="skills">SQL</li>
                </ul>
                <h3>Strait and Competitive Edge</h3>
                <h4>Strength</h4>
                <ul>
                    <li>Fast learner, hard work and a team player</li>
                    <li>Ability to plan ahead and follow through</li>
                    <li>Strong background in financial field (maybe hugely beneficial for some projects)</li>
                    <li>Not giving up easily in the face of adversity</li>
                </ul>
                
                <h3>Education Background</h3>
                <ul>
                    <li><strong>Bachelor Degree</strong> in Finance and Banking - Foreign Trade University, Hanoi, Vietnam</li>
                </ul>
                <h3>Professional Experience</h3>
                <ul>
                    <li><strong>2018-2022:</strong> Finance Officer of Viettel Digital Services - in charge of Budget and Planning Report, Process Optimizing Analysis and Financial Advisor for Business Strategy</li>
                    <li><strong>2015-2018:</strong> Sales Executive of Hanoi Steel Center - in charge of Sales Planning, Purchasing and Stock Control</li>
                </ul>
                 
            </main>
        </>
    )
}

AboutMe.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            
            {page}

        </>
    )
}

export default AboutMe;