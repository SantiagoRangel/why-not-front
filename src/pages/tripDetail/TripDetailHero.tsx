import MasButton from "../../components/MasButton"

export default function TripsHero() {
  return (
    <div className="bg-[url('/images/japan.webp')]  min-h-[100vh] bg-cover  ">
      <div className="bg-[rgba(0,0,0,0.2)] min-h-screen flex flex-col justify-center">
        <div className="flex flex-col gap-5 md:gap-10 items-center">
          <h1 className="text-white text-md md:text-xl font-mabryproLight">
            WE DARE YOU TO DISCOVER
          </h1>

          <h1
            id="animatedh1"
            className="text-white text-5xl md:text-[90pt] font-mabryproLight spaced text-center -mt-5"
          >
            JAPAN
          </h1>
          <div className="md:m-0 mt-10  translate-y-28">
            <MasButton url="" text="RESERVE TRIP" color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}
