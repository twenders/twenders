import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 29, 2022 Cookatie Epoch
  const epochMs = 1641013200000//1643432400000
  const now = Date.now()
  const msInHour = 1000 * 60 * 60
  const msInDay = msInHour * 24
  const index = Math.floor((now - epochMs) / msInDay)

  return {
    solution: WORDS[index % WORDS.length].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
