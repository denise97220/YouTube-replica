import { ChevronDown, ChevronUp } from 'lucide-react'
import { Children, ReactNode, useState } from 'react'
import Button from './Button'

type LargeSidebarContainerProps = {
  children: ReactNode
  title?: string
  itemCount?: number
}

const LargeSidebarContainer = ({ children, title, itemCount }: LargeSidebarContainerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const childrenArray = Children.toArray(children).flat()
  const visibleChildren = isOpen ? childrenArray : childrenArray.slice(0, itemCount)
  const ButtonIcon = isOpen ? ChevronUp : ChevronDown
  const ButtonTitle = isOpen ? '顯示較少' : '顯示更多'

  return (
    <div>
      {title && <div className='pl-6 my-3 text-70 font-bold'>{title}</div>}
      {visibleChildren}
      {itemCount && childrenArray.length > itemCount && (
        <Button
          look='ghost'
          className='w-full flex items-center rounded-lg gap-4 p-3 pl-6'
          onClick={() => setIsOpen((i) => !i)}
        >
          <ButtonIcon></ButtonIcon>
          <div className='text-sm'>{ButtonTitle}</div>
        </Button>
      )}
    </div>
  )
}

export default LargeSidebarContainer
