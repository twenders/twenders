import { 
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  ChartBarIcon,//, PuzzleIcon, CakeIcon,
  GiftIcon
} from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { Alert } from './components/alerts/Alert'
import { Grid } from './components/grid/Grid'
import { Keyboard } from './components/keyboard/Keyboard'
import { AboutModal } from './components/modals/AboutModal'
import { InfoModal } from './components/modals/InfoModal'
import { BonusModal } from './components/modals/BonusModal'
import { KajubidayModal } from './components/modals/KajubidayModal'
import { SantaModal } from './components/modals/SantaModal'
import { WinModal } from './components/modals/WinModal'
import { StatsModal } from './components/modals/StatsModal'
import { SettingsModal } from './components/modals/SettingsModal'
import { isWordInWordList, isWinningWord, solution } from './lib/words'
import { addStatsForCompletedGame, loadStats } from './lib/stats'

import Toggle from './components/modals/Toggle'

import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
  loadPrefsFromLocalStorage,
  savePrefsToLocalStorage
} from './lib/localStorage'


function App() {
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isWinModalOpen, setIsWinModalOpen] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isBonusModalOpen, setIsBonusModalOpen] = useState(false)
  const [isKajubidayModalOpen, setIsKajubidayModalOpen] = useState(false)
  const [isSantaModalOpen, setIsSantaModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)
  const [shareComplete, setShareComplete] = useState(false)
  
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage()
    if (loaded?.solution !== solution) {
      return []
    }
    if (loaded.guesses.includes(solution)) {
      setIsGameWon(true)
    }
    return loaded.guesses
  })


  const [isPoodle, setIsPoodle] = useState(() => {
    const loaded = loadPrefsFromLocalStorage()
    if (loaded?.isPoodlePref == null) {
      console.log(`set isPoodle=false by default`)
      return false
    }
    // console.log(`set isPoodle=${loaded.isPoodlePref} from local`)
    return loaded.isPoodlePref
  })

  const togglePoodle = <Toggle
    enabled={isPoodle}
    setEnabled={setIsPoodle}
    label="Switch to 'poodle' (hard mode)"
    ></Toggle>

  const specialSolution = "NIVAL"
  const KajubidaySolution = "TATER"
  const SantaSolution = "SANTA"
  const [stats, setStats] = useState(() => loadStats())

  useEffect(() => {
    // console.log(`Saved ${isPoodle} to local`)
    savePrefsToLocalStorage({isPoodlePref: isPoodle})
  }, [isPoodle])

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, solution })
  }, [guesses])

  useEffect(() => {
    if (isGameWon) {
      setIsWinModalOpen(true)
    }
  }, [isGameWon])

  const onChar = (value: string) => {
    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`)
    }
  }

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1))
  }

  const onEnter = () => {
    if (!(currentGuess.length === 5)) {
      setIsNotEnoughLetters(true)
      return setTimeout(() => {
        setIsNotEnoughLetters(false)
      }, 2000)
    }

    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFoundAlertOpen(true)
      return setTimeout(() => {
        setIsWordNotFoundAlertOpen(false)
      }, 2000)
    }

    const winningWord = isWinningWord(currentGuess)

    if (currentGuess.length === 5 && guesses.length < 6 && !isGameWon) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')

      if (winningWord) {
        setStats(addStatsForCompletedGame(stats, guesses.length))
        return setIsGameWon(true)
      }

      if (guesses.length === 5) {
        setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        setIsGameLost(true)
        return setTimeout(() => {
          setIsGameLost(false)
        }, 2000)
      }
    }
  }

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Alert message="Not enough letters" isOpen={isNotEnoughLetters} />
      <Alert message="Word not found" isOpen={isWordNotFoundAlertOpen} />
      <Alert
        message={`You lost, the word was ${solution}`}
        isOpen={isGameLost}
      />
      <Alert
        message="Game copied to clipboard"
        isOpen={shareComplete}
        variant="success"
      />
      <div className="flex w-80 mx-auto items-center mb-8">
        <h1 className="text-xl grow mx-1 font-bold">
          {isGameWon? "cookle!":  (isPoodle? "poodle" : "cookle")}
        </h1>
        {isGameWon && solution === specialSolution?
          <button
            type="button"
            className="flex mx-3 items-center px-1.5 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setIsBonusModalOpen(true)}>
            mysterious button
          </button> : null
        }
        {isGameWon && solution === KajubidaySolution?
          <button
            type="button"
            className="flex mx-12 items-center text-2xl rounded bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setIsKajubidayModalOpen(true)}>
            &nbsp;🥳&nbsp;
          </button> : null
        }
        {isGameWon && solution === SantaSolution?
          <GiftIcon
            className="h-6 w-6 mx-1 cursor-pointer text-red-800 rounded bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setIsSantaModalOpen(true)} 
          /> : null
        }
        <CogIcon
          className="h-6 w-6 mx-1 cursor-pointer"
          onClick={() => setIsSettingsModalOpen(true)}
        />
        <QuestionMarkCircleIcon
          className="h-6 w-6 mx-1 cursor-pointer"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <ChartBarIcon
          className="h-6 w-6 mx-1 cursor-pointer"
          onClick={() => setIsStatsModalOpen(true)}
        />
      </div>
      <Grid guesses={guesses} currentGuess={currentGuess} isPoodle={isPoodle} />
      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        guesses={guesses}
        isPoodle={isPoodle}
      />
      <WinModal
        isOpen={isWinModalOpen}
        handleClose={() => setIsWinModalOpen(false)}
        guesses={guesses}
        winningWord={solution}
        handleShare={() => {
          setIsWinModalOpen(false)
          setShareComplete(true)
          return setTimeout(() => {
            setShareComplete(false)
          }, 2000)
        }}
      />
      <BonusModal
        isOpen={isBonusModalOpen}
        handleClose={() => setIsBonusModalOpen(false)}
      />
      <KajubidayModal
        isOpen={isKajubidayModalOpen}
        handleClose={() => setIsKajubidayModalOpen(false)}
      />
      <SantaModal
        isOpen={isSantaModalOpen}
        handleClose={() => setIsSantaModalOpen(false)}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <SettingsModal
        isOpen={isSettingsModalOpen}
        handleClose={() => setIsSettingsModalOpen(false)}
        content={togglePoodle}
      />
      <StatsModal
        isOpen={isStatsModalOpen}
        handleClose={() => setIsStatsModalOpen(false)}
        gameStats={stats}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        handleClose={() => setIsAboutModalOpen(false)}
      />
      <button
        className="mx-auto mt-8 flex ">
      <InformationCircleIcon
        className="h-6 w-6 cursor-pointer"
        onClick={() => setIsAboutModalOpen(true)}
      />
      </button>
    </div>
  )
}

export default App
