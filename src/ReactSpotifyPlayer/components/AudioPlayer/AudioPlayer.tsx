import React from 'react'
import { observer } from 'mobx-react'

import { ArtistType, ImageType } from '../../stores/types'
import {
   AudioPlayerContainer,
   PlaylistImageInPlayer,
   TrackArtists,
   TrackName,
   TrackText
} from './styledComponents'

interface TrackType {
   name: string
   previewUrl: string
}
interface AudioPlayerType {
   image: ImageType
   track: TrackType // Can we do this?
   artist: ArtistType
}

const AudioPlayer = observer((props: AudioPlayerType) => {
   const { image, track, artist } = props

   return (
      <AudioPlayerContainer>
         <PlaylistImageInPlayer src={image.url} />
         <TrackText>
            <TrackName>{track.name}</TrackName>
            <TrackArtists>{artist.name}</TrackArtists>
         </TrackText>
         <audio src={track.previewUrl} preload='auto' controls />
      </AudioPlayerContainer>
   )
})

export default AudioPlayer
