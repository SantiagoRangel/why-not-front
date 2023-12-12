export default function Marquee({ text }: { text: string }) {
  return (
    <div className="marquee h-16 items-center bg-black">
      <ul className="marquee__content">
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>{" "}
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
      </ul>

      <ul aria-hidden="true" className="marquee__content">
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>{" "}
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>{" "}
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
        <span className="text-white shrink-0 text-xl ml-4">{text}</span>
      </ul>
    </div>
  )
}
