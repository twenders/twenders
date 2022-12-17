import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
// import { ISPOODLE } from '../../constants/isPoodle'

type Props = {
  value?: string
  status?: CharStatus
  isPoodle?: Boolean
}

export const Cell = ({ value, status, isPoodle = false }: Props) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-xl font-bold',
    {
      'bg-white border-gray-200': !status,
      'bg-gray-400 text-white border-gray-400': status === 'absent',
      'bg-orange-500 text-white border-orange-500': status === 'correct',
      'bg-blue-300 text-white border-blue-300': status === 'present',
      // 'bg-green-500 text-white border-green-500': status === 'correct',
      // 'bg-yellow-500 text-white border-yellow-500': status === 'present',
    }
  )
  let absentValue = isPoodle ? "💩" : value
  let displayValue = (status === 'present')? "🍪" : (
    (status === 'correct')? "🥔" : (status === 'absent')? absentValue : value
  )
  return (
    <>
      <div className={classes}>{displayValue}</div>
    </>
  )
}
