import { GlobalStyle } from "global/GlobalStyle"
import { Home } from "pages/Home"
import { useState } from "react"

export function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handlePointerEvent = (e: React.PointerEvent<HTMLImageElement>) => {
    setMousePosition({ x: e.pageX, y: e.pageY })
    setIsHovering(true)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLImageElement>) => {
    setMousePosition({ x: e.pageX, y: e.pageY })
  }

  const handlePointerLeave = () => {
    setIsHovering(false)
  }

  return (
    <>
      <GlobalStyle />
      <img
        onPointerEnter={handlePointerEvent}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        src={
          "https://c1.scryfall.com/file/scryfall-cards/small/front/d/9/d99a9a7d-d9ca-4c11-80ab-e39d5943a315.jpg?1632831210"
        }
      />
      <img
        style={{
          display: isHovering ? "block" : "none",
          position: "absolute",
          top: mousePosition.y,
          left: mousePosition.x,
          pointerEvents: "none",
        }}
        src={
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/9/d99a9a7d-d9ca-4c11-80ab-e39d5943a315.jpg?1632831210"
        }
      />
    </>
  )
}
