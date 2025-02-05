import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='odexcore' caption='Q' />
              <br />
              <span>
                Questions? Reach us <br /> 
              </span>
              <br />
              <br />
              <h3>+233544446455</h3>
              <h3>+233551023297</h3>
              <h3>+233556056596</h3>
              <br />
              {/* <button className='button-primary'>Request for quote</button> */}
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/company'>About Qodexcore</Link>
              </li>
              <li>
                <Link href='/products'>Products</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services'>Software Development</Link>
              </li>
              <li>
                <Link href='/services'>AI & Data Solutions</Link>
              </li>
              <li>
                <Link href='/services'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/services'>E-Commerce</Link>
              </li>
              <li>
                <Link href='/services'>Payment Gateway and Integration</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://web.facebook.com/profile.php?id=61572668191188' target="_blank" >
                    <BsFacebook size={25} />
                  </Link>
                </li>
        
                <li>
                  <Link href='/' target="_blank" >
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/qodexcore/' target="_blank" >
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2025 QODEXCORE. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>QODEXCORE</span>
              <span> &nbsp;  &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
