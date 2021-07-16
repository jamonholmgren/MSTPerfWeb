import { PlayerSnapshotType } from "./models"

const API_URL = "https://raw.githubusercontent.com/alexnoob/BasketBall-GM-Rosters/master/2020-21.NBA.Roster.json"

export interface ApiType {
  players: PlayerSnapshotType[]
}

export async function fetchPlayers(): Promise<ApiType> {
  const request = await fetch(API_URL)
  const data = await request.json()
  return data
}
