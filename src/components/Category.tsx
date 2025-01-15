import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CategoryProps = {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

const translateAmount = 200

const Category = ({ categories, selectedCategory, onSelect }: CategoryProps) => {
  const [isLeftVisible, setIsLeftVisible] = useState(false)
  const [isRightVisible, setIsRightVisible] = useState(false)
  const [displacement, setDisplacement] = useState(0)
  const categoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (categoryRef.current == null) return
    const observe = new ResizeObserver((entries) => {
      const container = entries[0].target

      setIsLeftVisible(displacement > 0)
      setIsRightVisible(displacement + container.clientWidth < container.scrollWidth)
    })

    observe.observe(categoryRef.current)

    return () => {
      observe.disconnect()
    }
  }, [categories, displacement])

  const leftTranslate = () => {
    const newDisplacement = displacement - translateAmount
    if (newDisplacement <= 0) setDisplacement(0)

    setDisplacement(newDisplacement)
  }

  const rightTranslate = () => {
    if (categoryRef.current == null) return
    const newDisplacement = displacement + translateAmount

    if (newDisplacement + categoryRef.current.clientWidth >= categoryRef.current.scrollWidth) {
      setDisplacement(categoryRef.current.scrollWidth - categoryRef.current.clientWidth)
    }

    setDisplacement(newDisplacement)
  }

  return (
    <div className='relative p-1.5 mb-4 overflow-x-hidden' ref={categoryRef}>
      <div className='w-auto flex gap-3' style={{ transform: `translateX(-${displacement}px)` }}>
        {categories.map((category) => (
          <Button
            key={category}
            look={selectedCategory === category ? 'dark' : 'default'}
            className='rounded-lg py-1.5 px-3 text-sm text-nowrap'
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* left button */}
      {isLeftVisible && (
        <div className='absolute w-24 left-0 top-0 bg-gradient-to-r from-50% from-white to-transparent'>
          <Button look='ghost' size='icon' className='w-auto h-auto' onClick={leftTranslate}>
            <ChevronLeft />
          </Button>
        </div>
      )}

      {/* right button */}
      {isRightVisible && (
        <div className='absolute flex justify-end w-24 right-0 top-0 bg-gradient-to-l from-50% from-white to-transparent'>
          <Button look='ghost' size='icon' className='w-auto h-auto' onClick={rightTranslate}>
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  )
}

export default Category
