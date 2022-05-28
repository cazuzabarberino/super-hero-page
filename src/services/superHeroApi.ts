import { HeroModel } from "models/heroModels/HeroModel"

const accessToken = process.env.REACT_APP_SUPER_HERO_API_TOKEN
const url = `https://superheroapi.com/api.php/${accessToken}`

async function fetchJson(url: string) {
  const response = await fetch(url)
  const jsonResponse = await response.json()
  return jsonResponse
}

export async function getHeroById(id: number): Promise<HeroModel> {
  const hero = await fetchJson(`${url}/${id}`)
  return hero
}

export async function searchHeroByName(name: string): Promise<HeroModel> {
  const hero = await fetchJson(`${url}/search/${name}`)
  return hero
}
