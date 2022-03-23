import React, { useContext, useEffect, useRef, useState } from 'react'
import './index.css'

interface AudioPlayerProps {
   url: string | undefined
}

const AudioPlayerV1 = (props: AudioPlayerProps) => {
   //    const audioPlayer = useRef()
   const { url } = props

   const [isPlaying, setIsPlaying] = useState(false)
   const [duration, setDuration] = useState(0)
   const [currentTime, setCurrentTime] = useState(0)

   // references
   const audioPlayer = useRef() // reference our audio component
   const progressBar = useRef() // reference our progress bar
   const animationRef = useRef() // reference the animation
   return (
      <div>
         <audio src={url} style={{ backgroundColor: 'black' }} controls></audio>
      </div>
   )
}

export default AudioPlayerV1
