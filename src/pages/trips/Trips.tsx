import Marquee from "../../components/Marquee"
import TripsBestseller from "./TripsBestseller"
import TripsHero from "./TripsHero"
import TripsOur from "./TripsOur"

export default function Trips() {
  return (
    <>
      <TripsHero />
      <Marquee text="LIVING THE HERE AND NOW" />
      <TripsOur />
      <TripsBestseller />
    </>
  )
}
