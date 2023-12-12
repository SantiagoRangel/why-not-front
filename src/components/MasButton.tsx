import clsx from "clsx"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
export default function MasButton({
  text,
  url,
  color,
}: {
  text: string
  url: string
  color: string
}) {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const playButtonAnimation = () => {
    gsap.to(buttonRef.current, {
      backgroundColor: color === "white" ? "#ffffff" : "#000000",
      duration: 0.5,
      color: color === "white" ? "#000000" : "#ffffff",
    })
  }
  const resetAnimation = () => {
    gsap.to(buttonRef.current, {
      backgroundColor: "rgb(255, 255, 255, 0)",
      duration: 0.5,
      color: color === "white" ? "#ffffff" : "#000000",
    })
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      buttonRef.current?.addEventListener("mouseover", playButtonAnimation)
      buttonRef.current?.addEventListener("mouseleave", resetAnimation)
    }, buttonRef)

    return () => {
      ctx.revert()
      buttonRef.current?.removeEventListener("mouseover", playButtonAnimation)
      buttonRef.current?.removeEventListener("mouseleave", resetAnimation)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className={clsx({
        "text-white border rounded-[20px] md:w-40 w-32 h-10 ":
          color === "white",
        "text-black border border-black rounded-[20px] md:w-40 w-32 h-10":
          color === "black",
        "font-mabryproLight text-xs md:text-md masbutton": true,
      })}
    >
      <a href={url}>{text}</a>
    </button>
  )
}
