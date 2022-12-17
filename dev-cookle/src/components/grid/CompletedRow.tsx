import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'

type Props = {
  guess: string
  isPoodle?: Boolean
}

export const CompletedRow = ({ guess, isPoodle = false }: Props) => {
  const statuses = getGuessStatuses(guess)

  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} isPoodle={isPoodle} />
      ))}
    </div>
  )
}
