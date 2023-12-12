import { Link } from "react-router-dom"

const NavLink = ({ text, to }: { text: string; to: string }) => {
  return (
    <Link className="text-white font-mabryproLight cursor-pointer" to={to}>
      {text}
    </Link>
  )
}
export default function NavBar() {
  return (
    <div className="pt-20 hidden md:flex absolute w-full">
      <div className="w-5/12 ml-10 mr-16 px-12 flex gap-5 h-16 border-t-2 border-b-2 border-white items-center justify-around">
        <NavLink text="WELCOME" to="/" />
        <NavLink text="TRIPS AND EXPERIENCES" to="/trips" />
      </div>
      <div className="w-2/12 shrink-0">
        <img
          src="/logo.svg"
          alt="why not logo"
          className="w-80 -mt-5 "
          loading="lazy"
        />
      </div>
      <div className="w-5/12 ml-16 mr-10 px-12 flex gap-5 h-16 border-t-2 border-b-2 border-white items-center justify-around">
        <NavLink text="ABOUT US" to="/" />
        <NavLink text="PARTNERSHIPS" to="/" />
        <NavLink text="CONTACT" to="/" />
      </div>
    </div>
  )
}
