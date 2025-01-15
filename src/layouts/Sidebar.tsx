import {
  Clapperboard,
  Clock,
  Flame,
  Gamepad2,
  History,
  Home,
  ListVideo,
  Music,
  Podcast,
  Radio,
  ThumbsUp,
  TvMinimalPlay,
  Youtube
} from 'lucide-react'
import SmallSidebarItem from '../components/SmallSidebarItem'
import LargeSidebarContainer from '../components/LargeSidebarContainer'
import LargeSidebarItem from '../components/LargeSidebarItem'
import { subscribes } from '../data/subscribes'
import { useSidebarContext } from '../context/SidebarContext'
import { FirstHeaderSection } from './Header'

const Sidebar = () => {
  const { openOnSmall, openOnLarge, closeFunction } = useSidebarContext()

  return (
    <>
      {/* small version sidebar */}
      <aside
        className={`sticky top-0 flex flex-col pb-4 overflow-y-auto scrollbar-hidden ${
          openOnLarge ? 'lg:hidden' : 'lg:flex'
        }`}
      >
        <SmallSidebarItem Icon={Home} title='首頁' url='/'></SmallSidebarItem>
        <SmallSidebarItem
          Icon={Clapperboard}
          title='Shorts'
          url='https://www.youtube.com/shorts/yD9HL82_sTc'
        ></SmallSidebarItem>
        <SmallSidebarItem
          Icon={TvMinimalPlay}
          title='訂閱內容'
          url='https://www.youtube.com/feed/subscriptions'
        ></SmallSidebarItem>
        <SmallSidebarItem Icon={Youtube} title='YouTube Music' url='https://music.youtube.com'></SmallSidebarItem>
      </aside>

      {/* Sidebar backdrop */}
      {openOnSmall && (
        <div className='lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50' onClick={closeFunction}></div>
      )}

      {/* large version sidebar */}
      <aside
        className={`w-56 lg:flex flex-col lg:sticky top-0 absolute gap-2 overflow-y-auto ${
          openOnLarge ? 'lg:flex' : 'lg:hidden'
        } ${openOnSmall ? 'flex bg-white z-[999] h-screen' : 'hidden'}`}
      >
        <div className='lg:hidden sticky top-0 pt-1 pl-4 bg-white'>
          <FirstHeaderSection />
        </div>

        <LargeSidebarContainer>
          <LargeSidebarItem IconOrUrl={Home} title='首頁' url='/' />
          <LargeSidebarItem IconOrUrl={Clapperboard} title='Shorts' url='https://www.youtube.com/shorts/yD9HL82_sTc' />
          <LargeSidebarItem
            IconOrUrl={TvMinimalPlay}
            title='訂閱內容'
            url='https://www.youtube.com/feed/subscriptions'
          />
          <LargeSidebarItem IconOrUrl={Youtube} title='YouTube Music' url='https://music.youtube.com' />
        </LargeSidebarContainer>
        <hr />
        <LargeSidebarContainer title='個人中心'>
          <LargeSidebarItem IconOrUrl={History} title='觀看紀錄' url='https://www.youtube.com/feed/history' />
          <LargeSidebarItem
            IconOrUrl={ListVideo}
            title='播放清單'
            url='https://www.youtube.com/watch?v=RRKJiM9Njr8&list=RDRRKJiM9Njr8&start_radio=1'
          />
          <LargeSidebarItem IconOrUrl={Clock} title='稍後觀看' url='https://www.youtube.com/shorts/yD9HL82_sTc' />
          <LargeSidebarItem IconOrUrl={ThumbsUp} title='喜歡的影片' url='https://www.youtube.com/playlist?list=LL' />
        </LargeSidebarContainer>
        <hr />
        <LargeSidebarContainer title='訂閱內容' itemCount={7}>
          {subscribes.map((subscribe) => (
            <LargeSidebarItem
              key={subscribe.id}
              title={subscribe.title}
              IconOrUrl={subscribe.imgUrl}
            ></LargeSidebarItem>
          ))}
        </LargeSidebarContainer>
        <hr />
        <LargeSidebarContainer title='探索'>
          <LargeSidebarItem
            IconOrUrl={Flame}
            title='發燒影片'
            url='https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl'
          />
          <LargeSidebarItem
            IconOrUrl={Music}
            title='音樂'
            url='https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ'
          />
          <LargeSidebarItem
            IconOrUrl={Clapperboard}
            title='電影'
            url='https://www.youtube.com/feed/storefront?bp=ogUCKAU%3D'
          />
          <LargeSidebarItem
            IconOrUrl={Radio}
            title='直播'
            url='hhttps://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig'
          />
          <LargeSidebarItem IconOrUrl={Gamepad2} title='遊戲' url='https://www.youtube.com/gaming' />
          <LargeSidebarItem IconOrUrl={Podcast} title='Podcast' url='https://www.youtube.com/podcasts' />
        </LargeSidebarContainer>
      </aside>
    </>
  )
}

export default Sidebar
