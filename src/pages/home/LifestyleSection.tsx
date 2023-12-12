import MasButton from "../../components/MasButton"

export default function LifestyleSection() {
  return (
    <>
      <div className="min-h-screen bg-bgPail flex flex-col md:flex-row items-center justify-evenly pb-10 p-8">
        <div className="w-full md:w-[40rem]">
          <img
            src="/images/imagecluster.png"
            alt="trip images cluster"
            className="w-full"
          />
        </div>
        <div className="flex flex-col h-full items-center w-full md:w-[40rem]">
          <h1 className="font-mabryproLight spaced text-4xl md:text-5xl w-[20rem] text-center mt-4">
            TRAVEL IS OUR <span className="font-retroscope">lifestyle</span>
          </h1>
          <p className="text-center font-mabyproLight text-md md:text-xl py-16 font-extralight leading-5 md:leading-8	">
            La inmortalidad es pensable. El individuo no es sino la conciencia
            de la propia identidad psicológica durante un espacio de tiempo,
            identidad de la que se conoce una parte de sus fundamentos
            materiales. La biología sabe hoy que los caracteres físicos se
            transmiten e incluso se conoce el mecanismo de la transmisión.
            También se tiene un cierto conocimiento empírico de la transmisión
            de los rasgos psicológicos, aunque la ciencia no está en medida de
            explicar ni el mecanismo ni su fundamento. Se conoce el asiento
            material de la memoria aunque se ignora si ésta se transmite en el
            tiempo al igual que los rasgos físicos.
          </p>
          <MasButton text={"SABER MÁS"} url={""} color={"black"} />
        </div>
      </div>
    </>
  )
}
