import MasButton from "../../components/MasButton"

export default function TripsBestseller() {
  return (
    <div className="relative">
      <img
        className="w-full"
        src="/images/best.webp"
        alt="best seller trip banner"
      />
      <div className="absolute top-2/3 left-[77%] transform -translate-x-1/2 -translate-y-1/2">
        <MasButton text={"RESERVAR"} url={""} color={"black"} />
      </div>
    </div>
  )
}
