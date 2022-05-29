import { useLayoutEffect, useRef, useState } from "react"
import { LoopScrollWrapper, Scroller } from "./LoopScroll.style"

interface LoopScrollProps<T, K> {
  elements: K[]
  props: (element: K) => T
  component: (props: T) => JSX.Element
}

export const LoopScroll = <T, k>({
  elements,
  props,
  component: Component,
}: LoopScrollProps<T, k>) => {
  const [list, setList] = useState<Array<JSX.Element>>([])
  const scrollerRef = useRef<HTMLDivElement>(null)
  const isListSet = useRef(false)
  const isLayoutResized = useRef(false)
  const listSize = useRef(0)
  const zeroScrollPosition = useRef(0)

  useLayoutEffect(() => {
    if (isListSet.current || elements.length === 0) return
    isListSet.current = true
    setList(
      elements.map((element, i) => <Component key={i} {...props(element)} />)
    )
  })

  useLayoutEffect(() => {
    if (
      !scrollerRef.current ||
      !isListSet.current ||
      isLayoutResized.current ||
      list.length === 0 ||
      elements.length === 0
    )
      return
    isLayoutResized.current = true
    listSize.current = scrollerRef.current.scrollWidth
    const elementSize = scrollerRef.current.scrollWidth / elements.length
    const extraElements = Math.ceil(
      scrollerRef.current.clientWidth / elementSize
    )
    const extraListRight = []
    const extraListLeft = []
    for (let i = 0; i < extraElements; i++) {
      const rightElement = elements[i % elements.length]
      extraListRight.push(
        <Component key={"right" + i} {...props(rightElement)} />
      )
      const leftElement = elements[elements.length - 1 - (i % elements.length)]
      extraListLeft.push(<Component key={"left" + i} {...props(leftElement)} />)
    }
    setList([...extraListLeft.reverse(), ...list, ...extraListRight])
    zeroScrollPosition.current = extraElements * elementSize
  })

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrollLeft = e.currentTarget.scrollLeft
    if (scrollLeft === 0) {
      e.currentTarget.scrollLeft = listSize.current
      return
    }

    const rightExcess =
      scrollLeft - (zeroScrollPosition.current + listSize.current)
    if (rightExcess > 0) {
      e.currentTarget.scrollLeft = zeroScrollPosition.current + rightExcess
    }
  }

  return (
    <LoopScrollWrapper>
      <Scroller ref={scrollerRef} onScroll={handleScroll}>
        {list}
      </Scroller>
    </LoopScrollWrapper>
  )
}
