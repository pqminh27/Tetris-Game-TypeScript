import {render, screen, cleanup} from "@testing-library/react"
import {beforeEach, describe, expect, it} from "vitest"
import App from "./App"

function sum(...numbers: number[]) {
    return numbers.reduce((total, number) => total + number, 0)
}
describe("#sum", () => {
    it("returns the sum of the numbers in normal array in App", () => {
        expect(sum(1, 2)).toBe(3)
    })
    it("returns the sum of 1 number in array in App", () => {
        expect(sum(2)).toBe(2)
    })
    beforeEach(() => {
        render(<App />)
    })
    it("render title", async () => {
        expect(screen.getByText(/Mini Tetris Game/i)).toBeDefined()
    })
})

// test("Render title", async () => {
//     render(<App />)
//     const title = screen.getByText(/Mini Tetris Game/i)
//     expect(title).toBeInTheDocument()
// })
