import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { buttonStyles } from './Button'

type LargeSidebarItemProps = {
  IconOrUrl: ElementType | string
  title: string
  url?: string
}

const LargeSidebarItem = ({ IconOrUrl, title, url }: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(buttonStyles({ look: 'ghost' }), 'w-full flex items-center p-2 pl-6 pb-3 gap-3 rounded-lg ')}
    >
      {typeof IconOrUrl === 'string' ? (
        <img src={IconOrUrl} className='w-6 h-6 rounded-full object-cover'></img>
      ) : (
        <IconOrUrl className='w-6 h-6'></IconOrUrl>
      )}

      <div className='text-sm truncate'>{title}</div>
    </a>
  )
}

export default LargeSidebarItem
