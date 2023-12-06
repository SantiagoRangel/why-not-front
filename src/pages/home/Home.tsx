import { useEffect } from "react"
import ChooseSection from "./ChooseSection"
import ExploreSection from "./ExploreSection"
import HeroSection from "./HeroSection"
import LifestyleSection from "./LifestyleSection"

export default function HomeSection() {
  return (
    <>
      {/* <Example /> */}
      <HeroSection />
      <ChooseSection />
      <ExploreSection />
      <LifestyleSection />
    </>
  )
}
