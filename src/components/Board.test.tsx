import {getByTestId, render} from "@testing-library/react"
import Board from "./Board"
import GameManager from "../classes/GameManager"
import {useState} from "react"

// test("renders board", () => {
//     const [game, setGame] = useState<GameManager>(
//         new GameManager(200, 400, 0.5, false)
//     )
//     render(<Board gameManager={game} setGame={setGame} />)
//     expect(
//         getByTestId(document.documentElement, "canvas-element")
//     ).toBeInTheDocument()
// })
