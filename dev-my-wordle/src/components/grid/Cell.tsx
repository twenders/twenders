import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
  value?: string
  status?: CharStatus
}

export const Cell = ({ value, status }: Props) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-xl font-bold',
    {
      'bg-white border-gray-200': !status,
      'bg-gray-500 text-white border-gray-500': status === 'absent',
      'bg-orange-500 text-white border-orange-500': status === 'correct',
      'bg-blue-300 text-white border-blue-300': status === 'present',
      // 'bg-green-500 text-white border-green-500': status === 'correct',
      // 'bg-yellow-500 text-white border-yellow-500': status === 'present',
    }
  )

  return (
    <>
      <div className={classes}>{value}</div>
    </>
  )
}
