import React from "react"
import { Link } from "react-router-dom"
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"

const Footer = () => {
  const contact_Links = [
    {
      link: "https://pauloluguenda0@gmail.com",
      display: "Email",
      icon: <BiLogoGmail className="text-red-500" />,
    },
    {
      link: "https://github.com/Paulods0",
      display: "Github",
      icon: <AiFillGithub className="text-gray-600" />,
    },
    {
      link: "https://twitter.com/PauloDs0",
      display: "Twitter",
      icon: <AiFillTwitterCircle className="text-blue-600" />,
    },
    {
      link: "https://www.facebook.com/profile.php?id=100015254298722",
      display: "Facebook",
      icon: <AiFillFacebook className="text-white" />,
    },
  ]
  return (
    <footer className="w-full py-4 mt-12 flex items-center shadow-[2px_0_1px_3px_rgba(256,256,256,0.1)]">
      <section className="w-[1200px] mx-auto flex justify-around items-center">
        <div className="text-white flex flex-col">
          <ul>
            <h1 className="mb-4 text-[17px] uppercase">Contact me</h1>
            {contact_Links.map((contact, index) => (
              <li key={index}>
                <Link
                  to={contact.link}
                  className="text-white flex gap-2 items-center"
                >
                  {contact.display}
                  <span>{contact.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white flex flex-wrap w-[500px]">
          <h1 className="mb-4 text-[17px] uppercase text-center">Thanks</h1>
          <p>
            Thank you for visiting our website! We appreciate your time and
            interest in our content. We hope you find the information here
            valuable and engaging. Feel free to explore and discover all that
            our website has to offer.
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
