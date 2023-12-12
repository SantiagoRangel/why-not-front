import MasButton from "../../components/MasButton"

export default function TripDetailMagicOf() {
  return (
    <section className="min-h-screen bg-bgPail flex flex-col md:flex-row items-center justify-evenly pb-10 p-8">
      <div className="w-full md:w-[40rem]">
        <img
          src="/images/imagecluster.png"
          alt="trip images cluster"
          className="w-full"
        />
      </div>
      <div className="flex flex-col h-full items-center w-full md:w-[40rem]">
        <h1 className="font-mabryproLight spaced text-4xl md:text-5xl w-[20rem] text-center mt-4">
          THE MAGIC OF <span className="font-retroscope">Japan</span>
        </h1>
        <p className="text-center font-mabyproLight text-md md:text-xl py-16 font-extralight leading-5 md:leading-8	">
          La primera parada del viaje es Kamakura, ciudiad imperal y pasado son
          todavia muy claras en los templos e imponentes que los rasgos físicos.
          La primera parada del viaje es Kamakura, ciudiad imperal y pasado son
          todavia muy claras en los templos e imponentes
        </p>
        <MasButton text={"SABER MÁS"} url={""} color={"black"} />
      </div>
      <div className="w-full md:w-[40rem]">
        <img
          src="/images/imagecluster.png"
          alt="trip images cluster"
          className="w-full"
        />
      </div>
    </section>
  )
}
