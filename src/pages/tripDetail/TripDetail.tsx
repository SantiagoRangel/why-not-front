import Marquee from "../../components/Marquee"
import TripDetailDescription from "./TripDetailDescription"
import TripDetailHero from "./TripDetailHero"
import TripDetailItinerary from "./TripDetailItinerary"
import TripDetailLiveExp from "./TripDetailLiveExp"
import TripDetailMagicOf from "./TripDetailMagicOf"
import TripDetailSummary from "./TripDetailSummary"

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
      <TripDetailLiveExp />
      <img src="/images/10.png" className="w-screen" alt="japan cover photo" />
      <TripDetailSummary />
    </>
  )
}
