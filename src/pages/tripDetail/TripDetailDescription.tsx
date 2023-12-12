export default function TripDetailDescription() {
  return (
    <section className="min-h-screen bg-black flex flex-col md:flex-row px-10 py-32 justify-center">
      {/* // MOBILE HEADER */}
      <div className="  items-center md:hidden flex flex-col pb-16">
        <h1 className="text-xl vertical-text text-white font-mabryproLight">
          LIVE
        </h1>
        <h1 className="text-4xl md:text-6xl  text-center text-white font-mabryproLight">
          THE JAPAN <span className="font-retroscope">experience</span>
        </h1>
      </div>

      {/* // CONTENT */}

      <div className="text-white flex flex-col max-w-[55rem] h-full my-auto">
        <div className="flex flex-col md:flex-row md:justify-around gap-2 md:gap-0">
          <div className="flex flex-row md:flex-col justify-between">
            <h3 className="font-questrial text-xl ">LEVEL</h3>
            <p className="text-sm mt-2">All levels welcome</p>
          </div>
          <div className="flex flex-row md:flex-col justify-between">
            <h3 className="font-questrial text-xl ">GROUP</h3>
            <p className="text-sm mt-2">40 pax</p>
          </div>{" "}
          <div className="flex flex-row md:flex-col justify-between">
            <h3 className="font-questrial text-xl ">PERIOD</h3>
            <p className="text-sm mt-2">10 - 21 september</p>
          </div>
        </div>
        <div className="flex justify-center text-center mt-20">
          <p className="text-md">
            Será un viaje entre la tradición y la modernidad: en Tokio,
            estaremos rodeados de rascacielos y cruzeremos e oso de ceros mos
            concurico cel munco dero •ostoro con violero Kemokuro doro
            sumergirse en la paz de los templos budistas y los jardines zen, no
            muy lejos del emblemático monte Fui. Luego tomaremos el Shinkansen,
            el tren de alta velocidad que tiene fama de no llegar nunca tarde,
            para viajar a Kioto, donde visitaremos más templos majestuosos,
            caminaremos por el bosque de bambú y cruzaremos los toros rojos de
            Fushimi Inari.
            <br />
            <br />
            En un viale a Japon hay ciertas paradas que no pueden taltar
            vasooller, en este itinerario las tenemos todas. La primera es, por
            supuesto, Tokio, la capital ultramoderna que refleja el frenesi y la
            efervescencia del pais; Kioto, con sus templos y barrios históricos;
            Hiroshima, renacida tras la Segunda Guerre mundiay osako, cuna de la
            castronomia a ponesa.
          </p>
        </div>
      </div>

      {/* // DESKTOP VERTICAL HEADER */}
      <div className="  items-center ml-24 hidden md:flex">
        <h1 className="text-6xl  vertical-text text-center text-white font-mabryproLight">
          THE JAPAN <span className="font-retroscope">experience</span>
        </h1>
        <h1 className="text-xl ml-10 vertical-text text-white font-mabryproLight">
          LIVE
        </h1>
      </div>
    </section>
  )
}
