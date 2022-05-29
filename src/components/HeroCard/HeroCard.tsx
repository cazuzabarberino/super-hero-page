import { HeroModel } from "models/heroModels/HeroModel"
import {
  ComponentWrapper,
  HeroCardOverlay,
  HeroCardTitle,
  HeroImage,
} from "./HeroCard.style"

interface HeroCardProps {
  hero: HeroModel
}

export const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <ComponentWrapper elevation={1}>
      <HeroImage src={hero.image.url} />
      <HeroCardOverlay>
        <HeroCardTitle>{hero.name}</HeroCardTitle>
      </HeroCardOverlay>
    </ComponentWrapper>
  )
}
