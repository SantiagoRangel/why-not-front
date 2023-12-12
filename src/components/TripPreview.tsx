import { Link } from "react-router-dom"

export default function TripPreview({
  title,
  subtitle,
  type,
  url,
}: {
  title: string
  subtitle: string
  type: string
  url: string
}) {
  return (
    <div className="flex flex-col">
      <img src={"/images/mountain.webp"} className="w-[30rem]" />
      <div className="flex pt-10 ">
        <div className="w-1/2">
          <h1 className="text-5xl">{title}</h1>
          <h2 className="text-2xl">{subtitle}</h2>
          <h1 className="text-md mt-6">{type}</h1>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          {/* TODO: ADD ARROW */}
          <Link to={url}>
            <h1>BOOK NOW</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}
