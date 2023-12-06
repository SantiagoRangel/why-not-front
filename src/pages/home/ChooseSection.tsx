import FadeIn from "../../components/Animations/FadeIn"
import MasButton from "../../components/MasButton"

export default function ChooseSection() {
  return (
    <div className="bg-black min-h-screen block md:flex justify-center items-center px-10 py-20">
      <div className="  items-center md:hidden flex flex-col pb-16">
        <FadeIn direction="left" duration={1} delay={0}>
          <h1 className="text-xl vertical-text text-white font-mabryproLight">
            CHOOSE
          </h1>
        </FadeIn>
        <FadeIn direction="left" duration={1} delay={0}>
          <h1 className="text-4xl md:text-6xl  text-center text-white font-mabryproLight">
            YOUR NEXT <span className="font-retroscope">adventure</span>
          </h1>
        </FadeIn>
      </div>
      <div className=" block md:flex shrink-0 justify-between  ">
        <div className="  flex items-center justify-center overflow-hidden z-10 mt-0 mr-0 -mb-[30px] -ml-[250px] md:-mt-[600px] md:-mr-[30px] md:mb-0 md:ml-0">
          <h1 className="text-white text-2xl font-mabrypro z-10">2022</h1>
          <svg
            className="circleText animate-spin-slow"
            viewBox="0 0 500 500"
            data-duration="5"
          >
            <path
              id="textcircle"
              fill="none"
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
            ></path>

            <text dy="-30">
              <textPath
                xlinkHref="#textcircle"
                className="font-questrial text-5xl"
              >
                . OUR BEST SELLER . OUR BEST SELLER . OUR BEST SELLER
              </textPath>
            </text>
          </svg>
        </div>

        <div className="flex justify-between w-full  flex-col md:flex-row gap-12 z-0">
          <div className="text-center shrink-0 flex flex-col items-center">
            <img
              loading="lazy"
              src="/trip1.png"
              className="w-[370px]"
              alt="trip preview"
            />
            <div className="mt-8">
              <MasButton url="" color="white" text="DESCUBRE MÁS" />
            </div>
          </div>

          <div className="text-center shrink-0 flex flex-col items-center">
            <img
              loading="lazy"
              src="/trip2.png"
              className="w-[370px]"
              alt="trip preview"
            />
            <div className="mt-8">
              <MasButton url="" color="white" text="DESCUBRE MÁS" />
            </div>
          </div>
        </div>
      </div>
      <div className="  items-center ml-16 hidden md:flex">
        <h1 className="text-6xl  vertical-text text-center text-white font-mabryproLight">
          YOUR NEXT <span className="font-retroscope">adventure</span>
        </h1>
        <h1 className="text-xl ml-10 vertical-text text-white font-mabryproLight">
          CHOOSE
        </h1>
      </div>
    </div>
  )
}
