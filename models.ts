import { types, Instance, SnapshotOut, applySnapshot } from "mobx-state-tree"
import { fetchPlayers } from "./api"

export const Ratings = types.model({
  hgt: 65,
  stre: 75,
  spd: 47,
  jmp: 55,
  endu: 62,
  ins: 69,
  dnk: 72,
  ft: 67,
  fg: 72,
  tp: 65,
  diq: 32,
  oiq: 41,
  drb: 46,
  pss: 56,
  reb: 96,
})

export const Birthplace = types.model({
  year: 1989,
  loc: "Santa Monica, CA",
})

export const Award = types.model({
  season: 2016,
  type: "Won Championship",
})

export const Transaction = types.model({
  season: 2014,
  tid: 5,
  type: "trade",
  fromTid: 17,
})

export const Injury = types.model({ type: "Healthy", gamesRemaining: 0 })

export const Stats = types.model({
  playoffs: false,
  yearsWithTeam: types.optional(types.frozen(), 0),
  season: types.optional(types.frozen(), 0),
  tid: types.optional(types.frozen(), 0),
  gp: types.optional(types.frozen(), 0),
  gs: types.optional(types.frozen(), 0),
  min: types.optional(types.frozen(), 0),
  fg: types.optional(types.frozen(), 0),
  fga: types.optional(types.frozen(), 0),
  tp: types.optional(types.frozen(), 0),
  tpa: types.optional(types.frozen(), 0),
  ft: types.optional(types.frozen(), 0),
  fta: types.optional(types.frozen(), 0),
  orb: types.optional(types.frozen(), 0),
  drb: types.optional(types.frozen(), 0),
  ast: types.optional(types.frozen(), 0),
  stl: types.optional(types.frozen(), 0),
  blk: types.optional(types.frozen(), 0),
  ba: types.optional(types.frozen(), 0),
  tov: types.optional(types.frozen(), 0),
  pf: types.optional(types.frozen(), 0),
  pts: types.optional(types.frozen(), 0),
  pm: types.optional(types.frozen(), 0),
  ewa: types.optional(types.frozen(), 0),
  per: types.optional(types.frozen(), 0),
  orbp: types.optional(types.frozen(), 0),
  drbp: types.optional(types.frozen(), 0),
  trbp: types.optional(types.frozen(), 0),
  astp: types.optional(types.frozen(), 0),
  stlp: types.optional(types.frozen(), 0),
  blkp: types.optional(types.frozen(), 0),
  usgp: types.optional(types.frozen(), 0),
  ows: types.optional(types.frozen(), 0),
  dws: types.optional(types.frozen(), 0),
  ortg: types.optional(types.frozen(), 0),
  drtg: types.optional(types.frozen(), 0),
  jerseyNumber: types.optional(types.frozen(), ""),
  minMax: types.optional(types.frozen(), undefined),
  fgMax: types.optional(types.frozen(), undefined),
  fgaMax: types.optional(types.frozen(), undefined),
  tpMax: types.optional(types.frozen(), undefined),
  tpaMax: types.optional(types.frozen(), undefined),
  "2pMax": types.optional(types.frozen(), undefined),
  "2paMax": types.optional(types.frozen(), undefined),
  ftMax: types.optional(types.frozen(), undefined),
  ftaMax: types.optional(types.frozen(), undefined),
  pmMax: types.optional(types.frozen(), undefined),
  orbMax: types.optional(types.frozen(), undefined),
  drbMax: types.optional(types.frozen(), undefined),
  trbMax: types.optional(types.frozen(), undefined),
  astMax: types.optional(types.frozen(), undefined),
  stlMax: types.optional(types.frozen(), undefined),
  blkMax: types.optional(types.frozen(), undefined),
  tovMax: types.optional(types.frozen(), undefined),
  pfMax: types.optional(types.frozen(), undefined),
  ptsMax: types.optional(types.frozen(), undefined),
  gmscMax: types.optional(types.frozen(), undefined),
})

export const Player = types.model({
  id: types.identifier,
  tid: 5,
  name: "Kevin Love",
  ratings: types.optional(types.array(Ratings), [
    {
      hgt: 65,
      stre: 75,
      spd: 47,
      jmp: 55,
      endu: 62,
      ins: 69,
      dnk: 72,
      ft: 67,
      fg: 72,
      tp: 65,
      diq: 32,
      oiq: 41,
      drb: 46,
      pss: 56,
      reb: 96,
    },
  ]),
  pos: "PF",
  hgt: 80,
  weight: 251,
  born: types.optional(Birthplace, { year: 1989, loc: "Santa Monica, CA" }),
  imgURL: "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201567.png",
  contract: types.frozen({ amount: 31250, exp: 2023 }),
  transactions: types.optional(types.array(Transaction), [{ season: 2014, tid: 5, type: "trade", fromTid: 17 }]),
  draft: types.frozen({
    round: 1,
    pick: 5,
    tid: 14,
    originalTid: 14,
    year: 2008,
  }),
  college: "UCLA",
  awards: types.optional(types.array(Award), [
    { season: 2016, type: "Won Championship" },
    { season: 2011, type: "Most Improved Player" },
    { season: 2012, type: "Second Team All-League" },
    { season: 2014, type: "Second Team All-League" },
    { season: 2011, type: "League Rebounding Leader" },
    { season: 2011, type: "All-Star" },
    { season: 2012, type: "All-Star" },
    { season: 2014, type: "All-Star" },
    { season: 2017, type: "All-Star" },
    { season: 2018, type: "All-Star" },
  ]),
  stats: types.optional(types.array(Stats), [
    {
      playoffs: false,
      yearsWithTeam: 3,
      season: 2011,
      tid: 17,
      gp: 73,
      gs: 73,
      min: 2611,
      fg: 482,
      fga: 1026,
      tp: 88,
      tpa: 211,
      ft: 424,
      fta: 499,
      orb: 330,
      drb: 782,
      ast: 184,
      stl: 45,
      blk: 28,
      ba: 96,
      tov: 155,
      pf: 148,
      pts: 1476,
      pm: -272,
      ewa: 16.7,
      per: 24.3,
      orbp: 13.7,
      drbp: 34.2,
      trbp: 23.6,
      astp: 11.8,
      stlp: 0.9,
      blkp: 0.8,
      usgp: 22.9,
      ows: 8.9,
      dws: 2.5,
      ortg: 104.2,
      drtg: 109.5,
      jerseyNumber: "42",
      minMax: [46],
      fgMax: [14],
      fgaMax: [26],
      tpMax: [5],
      tpaMax: [6],
      "2pMax": [10],
      "2paMax": [22],
      ftMax: [18],
      ftaMax: [23],
      pmMax: [32],
      orbMax: [12],
      drbMax: [19],
      trbMax: [31],
      astMax: [7],
      stlMax: [2],
      blkMax: [2],
      tovMax: [5],
      pfMax: [5],
      ptsMax: [43],
      gmscMax: [38.9],
    },
    {
      playoffs: false,
      yearsWithTeam: 4,
      season: 2012,
      tid: 17,
      gp: 55,
      gs: 55,
      min: 2145,
      fg: 474,
      fga: 1059,
      tp: 105,
      tpa: 282,
      ft: 379,
      fta: 460,
      orb: 226,
      drb: 508,
      ast: 111,
      stl: 47,
      blk: 28,
      ba: 65,
      tov: 128,
      pf: 152,
      pts: 1432,
      pm: 26,
      ewa: 14.8,
      per: 25.4,
      orbp: 11.6,
      drbp: 26.4,
      trbp: 19,
      astp: 10,
      stlp: 1.1,
      blkp: 0.9,
      usgp: 28.8,
      ows: 7.6,
      dws: 2.3,
      ortg: 105.4,
      drtg: 104.8,
      jerseyNumber: "42",
      minMax: [49],
      fgMax: [16],
      fgaMax: [31],
      tpMax: [7],
      tpaMax: [11],
      "2pMax": [12],
      "2paMax": [24],
      ftMax: [19],
      ftaMax: [24],
      pmMax: [25],
      orbMax: [9],
      drbMax: [18],
      trbMax: [21],
      astMax: [5],
      stlMax: [3],
      blkMax: [4],
      tovMax: [6],
      pfMax: [5],
      ptsMax: [51],
      gmscMax: [40.0],
    },
  ]),
  injury: types.optional(Injury, { type: "Healthy", gamesRemaining: 0 }),
})

// export const Team = types.model({
//   players: types.array(Player),
// })

export const RootStore = types
  .model({
    // teams: types.array(Team),
    players: types.array(Player),
  })
  .actions((root) => ({
    async replacePlayers(players: PlayerSnapshotType[]) {
      console.time("applySnapshot")
      applySnapshot(root, { players })
      console.timeEnd("applySnapshot")
    },
    clearPlayers() {
      console.time("clear()")
      root.players.clear()
      console.timeEnd("clear()")
    },
  }))
  .actions((root) => ({
    async loadPlayers() {
      console.log("\n\n\nRELOADING PLAYERS\n\n\n")

      console.time("fetchPlayers")
      const playerData = await fetchPlayers()
      console.timeEnd("fetchPlayers")

      // construct an ID while we're at it
      const players = playerData.players.map((p) => ({
        id: `${p.name} ${p.tid} ${p.born.year}`,
        ...p,
      }))

      console.time("root.replacePlayers(playerData.players)" + playerData.players.length)
      root.replacePlayers(players)
      console.timeEnd("root.replacePlayers(playerData.players)" + playerData.players.length)
    },
  }))

let rootStore: RootStoreType
export function useStores(): RootStoreType {
  if (!rootStore) {
    console.time("RootStore.create({})")
    rootStore = RootStore.create({})
    console.timeEnd("RootStore.create({})")
  }
  return rootStore
}

export interface RootStoreType extends Instance<typeof RootStore> {}
export interface PlayerType extends Instance<typeof Player> {}
export interface PlayerSnapshotType extends SnapshotOut<typeof Player> {}
