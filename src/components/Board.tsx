import {useEffect, useRef} from "react"
import GameManager from "../classes/GameManager"

interface BoardProps {
    gameManager: GameManager
    setGame: React.Dispatch<React.SetStateAction<GameManager>>
}

const Board = ({gameManager, setGame}: BoardProps) => {
    const boardRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const boardContext = boardRef.current?.getContext("2d")
        if (boardContext) {
            gameManager.boardContext = boardContext
            gameManager.currentShape.context = boardContext
            setGame(gameManager)
        }
    }, [gameManager])

    return (
        <canvas
            ref={boardRef}
            width={gameManager.width}
            height={gameManager.height}
            className="border-solid border-2 border-gray-100 bg-cyan-100 rounded-md mb-6 mr-14"
            data-testid="canvas-element" // for testing
        />
    )
}

export default Board
