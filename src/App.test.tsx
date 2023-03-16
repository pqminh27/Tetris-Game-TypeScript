import {render, screen} from "@testing-library/react"
import App from "./App"

test("Render title", () => {
    render(<App />)
    const title = screen.getByText(/Mini Tetris Game/i)
    expect(title).toBeInTheDocument()
})
