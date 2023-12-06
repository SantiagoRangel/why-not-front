export default function Footer() {
  return (
    <div className="bg-black flex flex-col md:flex-row justify-between py-12 px-12 md:gap-0 gap-10 items-center">
      <div className="flex flex-col">
        <a
          className="text-white md:text-l text-xs font-mabryproLight font-thin cursor-pointer"
          href=""
          target="_blank"
        >
          PRIVACY POLICY{" "}
        </a>{" "}
        <a
          className="text-white md:text-l text-xs font-mabryproLight font-thin cursor-pointer"
          href="https://google.com"
          target="_blank"
        >
          TERMS & CONDITIONS{" "}
        </a>
      </div>
      <div className=" shrink-0">
        <img src="/logo.svg" alt="why not logo" className="w-32 md:w-40  " />
      </div>
      <div>
        <p className="text-white text-xs md:text-l font-mabryproLight font-thin ">
          WHYNOT 2023. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  )
}
