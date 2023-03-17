import {getByTestId, render} from "@testing-library/react"
import Board from "./Board"
import GameManager from "../classes/GameManager"
import {useState} from "react"
import {describe, expect, it} from "vitest"

function sum(...numbers: number[]) {
    return numbers.reduce((total, number) => total + number, 0)
}

describe("#sum", () => {
    it("returns the sum of the numbers in normal array in Board", () => {
        expect(sum(1, 2, 3)).toBe(6)
    })
    it("returns the sum of the numbers in null array in Board", () => {
        expect(sum()).toBe(0)
    })
})

// test("renders board", () => {
//     const [game, setGame] = useState<GameManager>(
//         new GameManager(200, 400, 0.5, false)
//     )
//     render(<Board gameManager={game} setGame={setGame} />)
//     expect(
//         getByTestId(document.documentElement, "canvas-element")
//     ).toBeInTheDocument()
// })
