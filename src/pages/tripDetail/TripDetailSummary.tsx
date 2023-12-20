import MasButton from "../../components/MasButton"

export default function TripDetailSummary() {
  const notIncluded: string[] = [
    "Flights",
    "Travel insurance",
    "Outside manis & Drinks",
  ]

  const included = [
    {
      title: "ACCOMODATION",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam culpa fuga tenetur explicabo maxime, eligendi debitis? Repudiandae fugit, sint officiis perferendis repellat aperiam consequuntur quaerat, sit sunt non quos?",
    },
    {
      title: "EXPERIENCES",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam culpa fuga tenetur explicabo maxime, eligendi debitis? Repudiandae fugit, sint officiis perferendis repellat aperiam consequuntur quaerat, sit sunt non quos?",
    },
    {
      title: "FOOD",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam culpa fuga tenetur explicabo maxime, eligendi debitis? Repudiandae fugit, sint officiis perferendis repellat aperiam consequuntur quaerat, sit sunt non quos?",
    },
  ]

  const IncludedComponent = ({
    title,
    text,
  }: {
    title: string
    text: string
  }) => {
    return (
      <div className="mt-10">
        <h3 className="text-xl">{title}</h3>
        <p>{text}</p>
      </div>
    )
  }
  return (
    <div className="min-h-[50vh] pb-32 bg-bgPail flex flex-col">
      <div className="w-screen flex justify-center items-center py-20">
        <h1 className="font-mabryproLight spaced text-4xl md:text-5xl text-center ">
          TRIP
          <span className="font-retroscope ml-3 md:text-6xl  text-5xl  ">
            summary
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row px-10  md:px-48">
        <div className="md:w-9/12 md:pr-32">
          <h3 className="text-3xl">INCLUDED</h3>
          <div className="flex flex-col ">
            {included.map((element, index) => (
              <IncludedComponent
                key={index}
                text={element.text}
                title={element.title}
              />
            ))}
          </div>
        </div>
        <div className="md:w-3/12">
          <h3 className="text-2xl md:mt-0 mt-20">NOT INCLUDED</h3>
          <div className="flex flex-col gap-3 mt-12">
            {notIncluded.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
          </div>
          <h3 className="text-2xl md:mt-32 mt-16">FROM 2600€</h3>
          <div className="mt-5">
            <MasButton text={"BOOK NOW"} url={""} color={"black"} />
          </div>
        </div>
      </div>
    </div>
  )
}
