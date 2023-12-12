export default function TripDetailItinerary() {
  return (
    <section className="bg-[url('/images/japan.webp')] bg-cover min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-col md:w-5/12 w-full">
        <h1 className="font-mabryproLight text-center text-white text-xl mt-20">
          DISCOVER
        </h1>
        <h1 className="font-mabryproLight text-white text-4xl md:text-4xl text-center ">
          THE <span className="font-retroscope text-5xl">itinerary</span>
        </h1>
        <div className="flex justify-center mt-20">
          <img
            src="/images/silueta.svg"
            alt="trip map"
            className="w-64 md:w-96 "
          />
        </div>
      </div>

      <div className="md:w-7/12 w-full flex justify-center items-center mt-10 md:mt-0 px-0 md:px-20">
        <div className="bg-white opacity-80 w-full flex flex-col gap-5 p-10  md:pl-20 md:pr-40 md:py-20">
          <img
            src="/images/japan3.webp"
            className=" md:w-[550px] absolute -right-32 -translate-y-32 md:-translate-y-52 -rotate-[12deg] "
          />
          <h2 className="text-5xl">Kioto</h2>
          <h1 className="">DAY 2</h1>
          <p>
            En un viale a Japon hay ciertas paradas que no pueden taltar
            vasooller, en este itinerario las tenemos todas. La primera es, por
            supuesto, Tokio, la capital ultramoderna que refleja el frenesi y la
            efervescencia del pais; Kioto, con sus templos y barrios históricos;
            Hiroshima, renacida tras la Segunda Guerre mundiay osako, cuna de la
            castronomia a ponesa.
          </p>
        </div>
      </div>
    </section>
  )
}
