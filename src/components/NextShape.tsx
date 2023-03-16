import {useEffect, useRef} from "react"
import GameManager from "../classes/GameManager"

interface NextShapeProps {
    gameManager: GameManager
    setGame: React.Dispatch<React.SetStateAction<GameManager>>
}

const NextShape = ({gameManager, setGame}: NextShapeProps) => {
    const width: number = 80,
        height: number = 80

    const nextShapeCanvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const nextShapeCanvas: CanvasRenderingContext2D | null | undefined =
            nextShapeCanvasRef.current?.getContext("2d")

        if (nextShapeCanvas) {
            gameManager.nextShapeCanvas = nextShapeCanvas
            gameManager.nextShape.context = nextShapeCanvas
            setGame(gameManager)
        }
    }, [gameManager])

    return (
        <canvas
            ref={nextShapeCanvasRef}
            width={width}
            height={height}
            className="border-solid border-8 border-gray-300 bg-white rounded-md p-2 w-20 h-20"
        />
    )
}

export default NextShape
