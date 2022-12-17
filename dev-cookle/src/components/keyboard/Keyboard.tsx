import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  isPoodle?: Boolean
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses, isPoodle = false }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="Q" onClick={onClick} status={charStatuses['Q']} isPoodle={isPoodle} />
        <Key value="W" onClick={onClick} status={charStatuses['W']} isPoodle={isPoodle} />
        <Key value="E" onClick={onClick} status={charStatuses['E']} isPoodle={isPoodle} />
        <Key value="R" onClick={onClick} status={charStatuses['R']} isPoodle={isPoodle} />
        <Key value="T" onClick={onClick} status={charStatuses['T']} isPoodle={isPoodle} />
        <Key value="Y" onClick={onClick} status={charStatuses['Y']} isPoodle={isPoodle} />
        <Key value="U" onClick={onClick} status={charStatuses['U']} isPoodle={isPoodle} />
        <Key value="I" onClick={onClick} status={charStatuses['I']} isPoodle={isPoodle} />
        <Key value="O" onClick={onClick} status={charStatuses['O']} isPoodle={isPoodle} />
        <Key value="P" onClick={onClick} status={charStatuses['P']} isPoodle={isPoodle} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="A" onClick={onClick} status={charStatuses['A']} isPoodle={isPoodle} />
        <Key value="S" onClick={onClick} status={charStatuses['S']} isPoodle={isPoodle} />
        <Key value="D" onClick={onClick} status={charStatuses['D']} isPoodle={isPoodle} />
        <Key value="F" onClick={onClick} status={charStatuses['F']} isPoodle={isPoodle} />
        <Key value="G" onClick={onClick} status={charStatuses['G']} isPoodle={isPoodle} />
        <Key value="H" onClick={onClick} status={charStatuses['H']} isPoodle={isPoodle} />
        <Key value="J" onClick={onClick} status={charStatuses['J']} isPoodle={isPoodle} />
        <Key value="K" onClick={onClick} status={charStatuses['K']} isPoodle={isPoodle} />
        <Key value="L" onClick={onClick} status={charStatuses['L']} isPoodle={isPoodle} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          😋
        </Key>
        <Key value="Z" onClick={onClick} status={charStatuses['Z']} isPoodle={isPoodle} />
        <Key value="X" onClick={onClick} status={charStatuses['X']} isPoodle={isPoodle} />
        <Key value="C" onClick={onClick} status={charStatuses['C']} isPoodle={isPoodle} />
        <Key value="V" onClick={onClick} status={charStatuses['V']} isPoodle={isPoodle} />
        <Key value="B" onClick={onClick} status={charStatuses['B']} isPoodle={isPoodle} />
        <Key value="N" onClick={onClick} status={charStatuses['N']} isPoodle={isPoodle} />
        <Key value="M" onClick={onClick} status={charStatuses['M']} isPoodle={isPoodle} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          🤢
        </Key>
      </div>
    </div>
  )
}
