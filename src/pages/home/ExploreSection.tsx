import FadeIn from "../../components/Animations/FadeIn"

export default function ExploreSection() {
  return (
    <>
      <div className="min-h-screen bg-[url('/explore-beach.jpg')] flex flex-col items-center bg-cover">
        <div className="flex flex-col gap-2 md:gap-10 items-center absolute left-1/2 translate-x-[-50%] mt-10 md:-mt-12 text-center">
          <h1 className="text-white text-md md:text-2xl font-questrial">
            OR CREATE YOUR
          </h1>
          <h1 className="text-white text-4xl md:text-7xl font-mabrypro ">
            OWN <span className="font-retroscope">experience</span>
          </h1>
        </div>

        <div className="pt-[175px] flex justify-center ">
          <p className=" mt-5 md:mt-0 text-md md:text-xl font-mabryproLight text-white">
            EXPLORE BY CONTINENT
          </p>
        </div>

        <img src="/worldmap.svg" className="w-[800px] mt-16" alt="world map" />
      </div>

      <div className="marquee h-16 items-center bg-black">
        <ul className="marquee__content">
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>{" "}
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>{" "}
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>{" "}
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
          <span className="text-white shrink-0 text-xl ml-4">
            LIVING IN THE HERE AND NOW
          </span>
        </ul>
      </div>
    </>
  )
}
