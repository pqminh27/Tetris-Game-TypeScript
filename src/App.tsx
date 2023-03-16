import {useEffect, useState} from "react"
import Board from "./components/Board"
import NextShape from "./components/NextShape"
import Controls from "./classes/Controls"
import GameEvents from "./classes/GameEvents"
import GameManager from "./classes/GameManager"

const App = () => {
    const [score, setScore] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [columns, setColumns] = useState(10)
    const [width, setWidth] = useState(200)
    const [height, setHeight] = useState(400)
    const [blockSize, setBlockSize] = useState(width / columns)
    const [game, setGame] = useState<GameManager>(
        new GameManager(width, height, blockSize, playing)
    )

    const onKeyPressed = (e: KeyboardEvent) => {
        switch (e.key) {
            case Controls.upKeys.find((k) => k === e.key):
                game.moveShape(Controls.MoveDirection.Up)
                break
            case Controls.downKeys.find((k) => k === e.key):
                game.moveShape(Controls.MoveDirection.Down)
                break
            case Controls.leftKeys.find((k) => k === e.key):
                game.moveShape(Controls.MoveDirection.Left)
                break
            case Controls.rightKeys.find((k) => k === e.key):
                game.moveShape(Controls.MoveDirection.Right)
                break
        }
    }

    const play = () => {
        setScore(0)
        setGame(new GameManager(width, height, blockSize, playing))
        game.start()
        document.addEventListener("keydown", onKeyPressed)
    }

    useEffect(() => {
        GameEvents.setPlaying = setPlaying
        GameEvents.setScore = setScore
    }, [])

    return (
        <div className="container">
            <h1 className="pt-4">Mini Tetris Game</h1>
            <p className="py-2">Your Score: {score}</p>
            <div className="flex items-start">
                <Board gameManager={game} setGame={setGame} />
                <NextShape gameManager={game} setGame={setGame} />
            </div>
            {playing ? null : (
                <button className="btn" onClick={play}>
                    Play Game
                </button>
            )}
        </div>
    )
}

export default App
