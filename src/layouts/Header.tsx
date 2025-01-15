import { ArrowLeft, Bell, Menu, Mic, Plus, Search, User } from 'lucide-react'
import youtubeLogo from '../assets/youtube.jpg'
import Button from '../components/Button'
import { useState } from 'react'
import { useSidebarContext } from '../context/SidebarContext'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
      <FirstHeaderSection showSearch={showSearch} />

      {/* Search input */}
      {/* hidden in sm screen */}
      <form className={`gap-4 flex-grow justify-center ${showSearch ? 'flex' : 'hidden md:flex'}`}>
        {showSearch && (
          <Button type='button' look='ghost' size='icon' onClick={() => setShowSearch(false)}>
            <ArrowLeft />
          </Button>
        )}

        <div className='flex flex-grow max-w-[600px]'>
          <input
            type='search'
            placeholder='搜尋'
            className='w-full border border-secondary-border outline-none focus:border-blue-500 rounded-l-full py-1 px-4'
          ></input>
          <Button
            look='ghost'
            size='default'
            className='border border-secondary-border border-l-0 rounded-r-full py-2 px-4'
          >
            <Search />
          </Button>
        </div>
        <Button type='button' look='default' size='icon'>
          <Mic />
        </Button>
      </form>
      <div className={`flex-shrink-0 md:gap-2 ${showSearch ? 'hidden' : 'flex'}`}>
        {/* search & mic show in sm screen */}
        <Button look='ghost' size='icon' className='md:hidden' onClick={() => setShowSearch(true)}>
          <Search />
        </Button>
        <Button look='ghost' size='icon' className='md:hidden'>
          <Mic />
        </Button>
        <Button look='default' size='icon' className='flex w-50 h-10 p-1 px-3 text-sm gap-1'>
          <Plus />
          <div>建立</div>
        </Button>
        <Button look='ghost' size='icon'>
          <Bell />
        </Button>
        <Button look='ghost' size='icon'>
          <User />
        </Button>
      </div>
    </div>
  )
}

type FirstHeaderSectionProps = {
  showSearch?: boolean
}

export const FirstHeaderSection = ({ showSearch }: FirstHeaderSectionProps) => {
  const { toggleFunction } = useSidebarContext()

  return (
    <div className={`gap-4 items-center flex-shrink-0 ${showSearch ? 'hidden' : 'flex'}`}>
      <Button look='ghost' size='icon' onClick={toggleFunction}>
        <Menu />
      </Button>
      <a href='/'>
        <img src={youtubeLogo} alt='' className='h-6' />
      </a>
    </div>
  )
}

export default Header
