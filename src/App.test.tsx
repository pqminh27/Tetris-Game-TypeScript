import {render, screen, cleanup} from "@testing-library/react"
import App from "./App"

function sum(a: number, b: number): number {
    return a + b
}

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3)
})

test("Render title", async () => {
    render(<App />)
    const title = screen.getByText(/Mini Tetris Game/i)
    expect(title).toBeInTheDocument()
})
