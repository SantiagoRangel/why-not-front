import Marquee from "../../components/Marquee"
import TripDetailDescription from "./TripDetailDescription"
import TripDetailHero from "./TripDetailHero"
import TripDetailItinerary from "./TripDetailItinerary"
import TripDetailMagicOf from "./TripDetailMagicOf"

export default function TripDetail() {
  return (
    <>
      <TripDetailHero />
      <TripDetailDescription />
      <img
        src="/images/japan2.webp"
        className="w-screen"
        alt="trip image"
        loading="lazy"
      />
      <Marquee text={"LIVING THE HERE AND NOW"} />
      <TripDetailMagicOf />
      <TripDetailItinerary />
    </>
  )
}
