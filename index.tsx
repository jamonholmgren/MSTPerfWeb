import React from "react"
import ReactDOM from "react-dom"
import { useStores, PlayerType } from "./models"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"

const PlayerRow = observer(({ player }: { player: PlayerType }) => {
  return (
    <div>
      <p style={{ fontSize: 24, fontWeight: "600" }}>{player.name}</p>
      <p style={{ marginTop: 8, fontSize: 18, fontWeight: "400" }}>
        {player.awards[0] ? `${player.awards[0].season} - ${player.awards[0].type}` : "No awards"}
      </p>
    </div>
  )
})

const App = observer(() => {
  const rootStore = useStores()
  // console.log(rootStore)
  useEffect(() => {
    // kick it off
    rootStore.loadPlayers()

    const timer = setTimeout(() => {
      // when I clear the players before loading again, it's much faster
      rootStore.clearPlayers()
      rootStore.loadPlayers().then(() => {
        setTimeout(() => {
          // do a third time ... it'll be slow, because I'm not clearing it
          rootStore.loadPlayers()
        }, 3000)
      })
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {rootStore.players.map((player) => (
        <PlayerRow key={player.name} player={player} />
      ))}
    </div>
  )
})

ReactDOM.render(<App />, document.getElementById("main"))
