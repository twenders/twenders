import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
  value?: string
  status: CharStatus
}

export const MiniCell = ({ value, status }: Props) => {
  const classes = classnames(
    'w-9 h-9 border-solid border-2 border-slate-200 flex items-center justify-center mx-0.5 text-s font-bold rounded-s',
    {
      'bg-gray-500 text-white': status === 'absent',
      'bg-orange-500': status === 'correct',
      'bg-blue-300': status === 'present',
      // 'bg-green-500': status === 'correct',
      // 'bg-yellow-500': status === 'present',
    }
  )

  let displayValue = value  //(status === 'present')? "🍪" : ((status === 'correct')? "🥔" : '')
  return (
    <>
      <div className={classes}>{displayValue}</div>
    </>
  )
}
