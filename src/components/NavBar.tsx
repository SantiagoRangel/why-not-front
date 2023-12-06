const NavLink = ({ text }: { text: string }) => {
  return <p className="text-white font-mabryproLight">{text}</p>
}
export default function NavBar() {
  return (
    <div className="pt-20 hidden md:flex absolute w-full">
      <div className="w-5/12 ml-10 mr-16 px-12 flex gap-5 h-16 border-t-2 border-b-2 border-white items-center justify-around">
        <NavLink text="WELCOME" />
        <NavLink text="TRIPS AND EXPERIENCES" />
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
        <NavLink text="ABOUT US" />
        <NavLink text="PARTNERSHIPS" />
        <NavLink text="CONTACT" />
      </div>
    </div>
  )
}
