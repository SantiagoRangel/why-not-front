import gsap from "gsap"
import { useRef, useEffect, ReactNode } from "react"

const FadeIn = ({
  children,
  delay,
  duration,
  direction,
  ...props
}: {
  children: ReactNode
  delay: number
  duration: number
  direction: string
}) => {
  const compRef = useRef(null)
  const distance = 40
  let fadeDirection: gsap.TweenVars = { x: 0 }

  switch (direction) {
    case "left":
      fadeDirection = { x: -distance }
      break
    case "right":
      fadeDirection = { x: distance }
      break
    case "up":
      fadeDirection = { y: distance }
      break
    case "down":
      fadeDirection = { y: -distance }
      break
    default:
      fadeDirection = { x: 0 }
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(compRef.current, {
        scrollTrigger: compRef.current,
        duration: duration,
        ...fadeDirection,
        opacity: 0,
        delay: delay,
        ease: "power4.in",
      })
    }, compRef)

    return () => {
      ctx.revert()
    }
  }, [compRef])
  return (
    <div ref={compRef} className="" {...props}>
      {children}
    </div>
  )
}

export default FadeIn
