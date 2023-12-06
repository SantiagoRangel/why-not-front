import { useLayoutEffect, useRef } from "react"
import FadeIn from "../../components/Animations/FadeIn"
import MasButton from "../../components/MasButton"
import SplitType from "split-type"
import gsap from "gsap"
export default function HeroSection() {
  const exampleRef = useRef(null)

  useLayoutEffect(() => {
    const animateText = new SplitType("#animatedh1")

    gsap.to(".char", {
      y: 0,
      stagger: 0.07,
      delay: 0.9,
      duration: 1,
    })
  }, [])
  return (
    <>
      <div
        ref={exampleRef}
        className="bg-[url('/home-beach.jpg')]  min-h-[100vh] bg-cover  "
      >
        <div className="bg-[rgba(0,0,0,0.2)] min-h-screen flex flex-col justify-center">
          <div className="flex flex-col gap-5 md:gap-10 items-center">
            <FadeIn delay={0} duration={1.5} direction="down">
              <h1 className="text-white text-md md:text-2xl font-mabryproLight">
                WE DARE YOU TO DISCOVER
              </h1>
            </FadeIn>

            <h1
              id="animatedh1"
              className="text-white text-5xl md:text-7xl font-mabryproLight spaced text-center"
            >
              A WORLD FULL OF
            </h1>
            <FadeIn delay={1.9} duration={1.5} direction="up">
              <h1 className="text-white text-4xl  md:text-6xl -mt-6 font-retroscope">
                experiences
              </h1>
            </FadeIn>
            <div className="md:m-0 mt-10">
              <MasButton url="" text="DESCUBRE MÁS" color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
