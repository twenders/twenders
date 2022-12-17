const gameStateKey = 'gameState'

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}


const gamePrefKey = 'gamePrefs'

export type GamePrefs = {
  isPoodlePref: boolean
}

export const savePrefsToLocalStorage = (gamePrefs: GamePrefs) => {
  localStorage.setItem(gamePrefKey, JSON.stringify(gamePrefs))
}

export const loadPrefsFromLocalStorage = () => {
  const Prefs = localStorage.getItem(gameStatKey)
  return Prefs ? (JSON.parse(Prefs) as GamePrefs) : null
}
