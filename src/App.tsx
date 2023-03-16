import {useEffect, useState} from "react"
import Board from "./components/Board"
import NextShape from "./components/NextShape"
import Controls from "./classes/Controls"
import GameEvents from "./classes/GameEvents"
import GameManager from "./classes/GameManager"
import React from "react"

const App = () => {
    const [score, setScore] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [columns, setColumns] = useState(10)
    const [width, setWidth] = useState(200) //Width of the board
    const [height, setHeight] = useState(400) //Height of the board
    const [blockSize, setBlockSize] = useState(width / columns)
    const [game, setGame] = useState<GameManager>(
        new GameManager(width, height, blockSize, playing)
    )

    function onKeyPressed(e: KeyboardEvent) {
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

    function playGame() {
        setScore(0)
        setGame(new GameManager(width, height, blockSize, playing))
        game.start()
        document.addEventListener("keydown", onKeyPressed)
    }

    //TODO: Fix the end button
    function endGame() {
        setPlaying(false)
        game.stop()
        GameEvents.setPlaying(false)
        setGame(new GameManager(width, height, 0, playing))
    }

    useEffect(() => {
        GameEvents.setPlaying = setPlaying
        GameEvents.setScore = setScore
    }, [])

    return (
        <div className="container">
            <h1 className="px-24 py-6 text-4xl">Mini Tetris Game</h1>
            <p className="px-24 py-6 text-2xl">Your Score: {score}</p>

            <div className="flex py-6 px-24">
                <Board gameManager={game} setGame={setGame} />
                <NextShape gameManager={game} setGame={setGame} />
            </div>
            <div className="flex px-24">
                {playing ? null : (
                    <button className="button" onClick={playGame}>
                        Play Game
                    </button>
                )}
            </div>
        </div>
    )
}

export default App
