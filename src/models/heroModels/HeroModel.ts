import { HeroAppearanceModel } from "./HeroAppearanceModel"
import { HeroBiographyModel } from "./HeroBiographyModel"
import { HeroPowerStatsModel } from "./HeroPowerStatsModel"

export type HeroModel = {
  id: number
  name: string
  powerstats: HeroPowerStatsModel
  biography: HeroBiographyModel
  appearance: HeroAppearanceModel
  work: {
    occupation: string
    base: string
  }
  connections: {
    "group-affiliation": string
    relatives: string
  }
  image: {
    url: string
  }
}
