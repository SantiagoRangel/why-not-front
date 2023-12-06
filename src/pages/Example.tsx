import React, { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export default function Example() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    gsap.to(ref.current, {
      duration: 0.3,
      y: 40,
    })
  }, [])
  return (
    <div ref={ref} className="h-96 flex justify-center items-center">
      <p className="text-5xl">ALEX ES EL MEJOR ESCALADOR DEL MUNDO</p>
    </div>
  )
}
