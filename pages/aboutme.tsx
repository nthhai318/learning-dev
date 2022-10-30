import { ReactElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGit, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


const AboutMe = () => {
    return (
        <>
            <h1>About Me</h1>   
            <>
                <h2>NGO THE HAI</h2>
                <p>My name is Ngo The Hai. I'm a 29-year old up-and-coming fresher web developer from Hanoi, Vietnam.</p>
                <p>Although graduated from a Finance background, I have a strong enthusiasm and passion for Internet technology in general, especially web builder. That is why I quit a well-paid financial job to commit fulltime to become a web developer. To me, it is great that there are always new exciting things to learn as the web is constantly evolving and improving.</p>
                <p>Technical skills:</p>
                <ul>
                    <li className="skills">HTML</li>
                    <li className="skills">Javascript</li>
                    <li className="skills">CSS</li>
                    <li className="skills">React.js</li>
                    <li className="skills">SQL</li>
                </ul>
                <p>Check me out via <Link href="https://www.facebook.com/ngo.t.hai.97" ><FontAwesomeIcon icon={faFacebook} /></Link> <Link href="https://twitter.com/HaiNgo87853620"><FontAwesomeIcon icon={faTwitter} /></Link> <Link href="https://github.com/nthhai318"><FontAwesomeIcon icon={faGit} /></Link></p>  
            </>
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