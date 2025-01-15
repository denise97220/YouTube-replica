import Category from './components/Category'
import Header from './layouts/Header'
import VideoItem from './components/VideoItem'
import { categories } from './data/categories'
import { useState } from 'react'
import { videos } from './data/videos'
import Sidebar from './layouts/Sidebar'
import { SidebarProvider } from './context/SidebarContext'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col'>
        {/* Header */}
        <Header />
        <div className='grid grid-cols-[auto,1fr] overflow-auto'>
          <Sidebar />
          <div className='overflow-x-hidden px-8 pb-4'>
            <div className='sticky top-0 pb-0.5 mb-3 bg-white z-[99]'>
              <Category
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              ></Category>
            </div>
            <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
              {videos.map((video) => (
                <VideoItem key={video.id} {...video}></VideoItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App
