import React, { useRef, useEffect } from 'react'

const Video = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Ensure video plays automatically and loops
      const playVideo = async () => {
        try {
          video.muted = true
          video.loop = true
          video.playsInline = true
          await video.play()
        } catch (error) {
          console.log('Video autoplay failed:', error)
        }
      }

      // Try to play video when component mounts
      playVideo()

      // Handle video ended event to ensure seamless looping
      const handleVideoEnd = () => {
        video.currentTime = 0
        video.play()
      }

      video.addEventListener('ended', handleVideoEnd)
      
      // Cleanup event listener
      return () => {
        video.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [])

  return (
    <div className='h-full w-full relative'>
        {/* Fallback image for when video fails to load */}
        <img 
          className='h-full w-full object-cover absolute inset-0' 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Creative workspace background"
        />
        
        {/* Main video with enhanced loop handling */}
        <video 
          ref={videoRef}
          className='h-full w-full object-cover relative z-10' 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          onError={(e) => {
            // Hide video on error, fallback image will show
            e.target.style.display = 'none';
          }}
          onLoadedData={() => {
            // Ensure video starts playing when loaded
            if (videoRef.current) {
              videoRef.current.play().catch(console.log)
            }
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Video