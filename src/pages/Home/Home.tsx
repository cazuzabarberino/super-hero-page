import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { HeroCard } from "components/HeroCard"
import { LoopScroll } from "components/LoopScroll"
import { HeroModel } from "models/heroModels/HeroModel"
import { useEffect, useRef, useState } from "react"
import { getHeroById } from "services/superHeroApi"
import { PageContent, PageWrapper } from "./Home.style"

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [heroList, setHeroList] = useState<Array<HeroModel>>([])
  const cardWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const requests = []
    for (let i = 1; i <= 10; i++) requests.push(getHeroById(i))
    Promise.all(requests).then((heroes) => setHeroList(heroes))
  }, [])

  const handleCardWrapperScroll = (
    e: React.UIEvent<HTMLDivElement, UIEvent>
  ) => {
    console.log(
      e.currentTarget.scrollLeft,
      e.currentTarget.scrollWidth - e.currentTarget.clientWidth
    )
  }

  return (
    <PageWrapper>
      <Header />
      <PageContent>
        <LoopScroll
          elements={heroList}
          props={(hero) => ({
            hero,
          })}
          component={HeroCard}
        />
      </PageContent>
      <Footer />
    </PageWrapper>
  )
}
