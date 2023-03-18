import {getByTestId, render} from "@testing-library/react"
import Board from "./Board"
import GameManager from "../classes/GameManager"
import {describe, expect, it} from "vitest"
import {SetStateAction} from "react"

it("renders board component", () => {
    render(
        <Board
            gameManager={new GameManager(300, 500, 0.5, false)}
            setGame={function (value: SetStateAction<GameManager>): void {
                throw new Error("Function not implemented.")
            }}
        />
    )
    expect(
        getByTestId(document.documentElement, "canvas-element")
    ).toBeInTheDocument()
})
