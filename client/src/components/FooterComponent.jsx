import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
const FooterComponent = () => {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="logo mt-5">
              <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                <span className="px-2 py-1 bg-gradient-to-r from-purple-700 via-blue-600 to-blue-500 rounded-lg text-white">Safeer's</span>
                {' '}Blog
              </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about"/>
              <Footer.LinkGroup col>
                <Footer.Link
                href="#"
                >
                  Projects
                </Footer.Link>
                <Footer.Link
                href="#"
                >
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="follow us"/>
              <Footer.LinkGroup col>
                <Footer.Link
                href="https://github.com/safeermaan"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                href="#"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal"/>
              <Footer.LinkGroup col>
                <Footer.Link
                href="#"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                href="#"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Safeer Maan" year={new Date().getFullYear()}/>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/safeermaan' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>
          </div>
        </div>
      </div>
    </Footer>    
  )
}

export default FooterComponent