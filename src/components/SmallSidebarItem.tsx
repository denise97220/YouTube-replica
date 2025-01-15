import { ElementType } from 'react'
import { buttonStyles } from './Button'
import { twMerge } from 'tailwind-merge'

type smallSidebarProps = {
  Icon: ElementType
  title: string
  url: string
}

const SmallSidebarItem = ({ Icon, title, url }: smallSidebarProps) => {
  return (
    <a
      href={url}
      className={twMerge(buttonStyles({ look: 'ghost' }), 'flex flex-col items-center py-4 px-2 rounded-lg gap-1')}
    >
      <Icon className='w-5 h-5'></Icon>
      <div className='text-[0.7rem] truncate text-center'>{title}</div>
    </a>
  )
}

export default SmallSidebarItem
