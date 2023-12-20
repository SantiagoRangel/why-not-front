import MasButton from "../../components/MasButton"

export default function TripDetailLiveExp() {
  return (
    <div className="min-h-screen bg-black h-[70vh] flex justify-center">
      <img
        src="/images/8.png"
        alt="trip photo"
        className="absolute w-[35rem] left-0 mt-0 md:mt-96 z-0"
      />
      <img
        src="/images/9.png"
        alt="trip photo"
        className="absolute w-[35rem] right-0 mt-[500px] md:mt-56 z-0"
      />
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="font-mabryproLight text-white spaced text-4xl md:text-5xl text-center ">
          LIVE THE <br /> FULL{" "}
          <span className="font-retroscope md:text-6xl  text-5xl  ">
            experience
          </span>
        </h1>
        <div className="mt-8 md:mt-20">
          <MasButton text="Save your spot " color="white" url={""} />
        </div>
      </div>
    </div>
  )
}
