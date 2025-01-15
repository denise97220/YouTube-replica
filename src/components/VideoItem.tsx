import { formatViews } from '../utils/formatViews'
import { formatTime } from '../utils/formatTime'
import { formatDuration } from '../utils/formatDuration'
import { useEffect, useRef, useState } from 'react'

type VideoItemProps = {
  id: string
  title: string
  channel: {
    id: string
    name: string
    profileUrl: string
  }
  views: number
  postedAt: Date
  duration: number
  imgUrl: string
  videoId: string
}

const VideoItem = ({ id, title, channel, views, postedAt, duration, imgUrl, videoId }: VideoItemProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoUrl, setVideoUrl] = useState(
    `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&fs=0&start=0`
  )
  const videoRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      setVideoUrl(
        `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&fs=0&start=0`
      )
    } else {
      setVideoUrl('')
    }
  }, [isPlaying])

  return (
    <div className='flex flex-col gap-2 mb-4'>
      {/* video cover */}
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        className='relative aspect-video'
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
      >
        <img src={imgUrl} className='block w-full h-full object-cover rounded-xl' />
        <div className='absolute bottom-1 right-1 bg-secondary-dark bg-opacity-50 text-sm text-secondary-default px-1 rounded'>
          {formatDuration(duration)}
        </div>

        {/* video player */}
        <iframe
          width='560'
          height='315'
          src={videoUrl}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          ref={videoRef}
          className={`w-full h-full object-contain absolute inset-0 ${
            isPlaying ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        ></iframe>
      </a>

      {/* video description */}
      <div className='flex gap-2'>
        <a href={`https://www.youtube.com/channel/${channel.id}`} className='flex-shrink-0'>
          <img src={channel.profileUrl} className='w-11 h-11 rounded-full' />
        </a>
        <div className='flex flex-col'>
          <a href={`https://www.youtube.com/watch?v=${videoId}`} className='font-bold line-clamp-2 mb-1'>
            {title}
          </a>
          <a href={`https://www.youtube.com/channel/${channel.id}`} className='text-sm text-secondary-text'>
            {channel.name}
          </a>
          <div className='text-sm text-secondary-text'>
            觀看次數：{formatViews(views)}次 • {formatTime(postedAt)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoItem
