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
              <h3>+1 001 234 5678</h3>
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
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                {/* <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li> */}
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
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
