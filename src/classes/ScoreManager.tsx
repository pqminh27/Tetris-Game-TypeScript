const SCORES = [100, 300, 500, 800]

class ScoreManager {
    static calculateScore(rows: number): number {
        return SCORES[rows - 1]
    }
}

export default ScoreManager
