import { ReactNode } from 'react'
import classnames from 'classnames'
import { KeyValue } from '../../lib/keyboard'
import { CharStatus } from '../../lib/statuses'

type Props = {
  children?: ReactNode
  value: KeyValue
  width?: number
  status?: CharStatus
  onClick: (value: KeyValue) => void
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
}: Props) => {
  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-s font-bold cursor-pointer',
    {
      'bg-gray-200 hover:bg-gray-300 active:bg-gray-400': !status,
      'bg-gray-500 text-white': status === 'absent',
      'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white':
      status === 'correct',
      'bg-blue-300 hover:bg-blue-600 active:bg-blue-700 text-white':
      status === 'present',
      // 'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white':
      //   status === 'correct',
      // 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white':
      //   status === 'present',
    }
  )
  let displayValue = (status === 'present')? "🍪" : ((status === 'correct')? "🥔" : value)
  return (
    <div
      style={{ width: `${width}px`, height: '40px' }}
      className={classes}
      onClick={() => onClick(value)}
    >
      {children || displayValue}
    </div>
  )
}
