import TripPreview from "../../components/TripPreview"

export default function TripsOur() {
  return (
    <div className="min-h-screen bg-bgPail py-16">
      <div className="flex flex-col md:flex-row pb-16 justify-center">
        <div className="md:w-1/2 flex justify-center">
          <h1 className="text-3xl md:text-5xl ">OUR TRIPS</h1>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <div className="md:mt-0 mt-6">
            <p className="text-sm md:text-xl">THE ONLY TRIP YOU'LL</p>
            <p className="text-sm md:text-xl -translate-y-1">
              REGRET IS THE ONE YOU DON'T TAKE
            </p>
          </div>
        </div>
      </div>

      <div className="flex  justify-evenly">
        <TripPreview
          title={"JAPAN"}
          subtitle={"Fuji"}
          type={"SKI EXPERIENCE"}
          url={"/trip"}
        />
        <TripPreview
          title={"JAPAN"}
          subtitle={"Fuji"}
          type={"SKI EXPERIENCE"}
          url={"/trip"}
        />
      </div>
    </div>
  )
}
