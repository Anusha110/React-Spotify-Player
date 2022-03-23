import { observer } from 'mobx-react'
import React from 'react'
import {
   ArtistType,
   FormattedAlbumTrackType,
   FormattedTrackDetailsType,
   ImageType
} from '../../stores/typesv2'
import TrackTable from '../TrackTable/TrackTable'
import {
   AudioPlayerContainer,
   PlaylistImageInPlayer,
   TrackArtists,
   TrackName,
   TrackText
} from './styledComponents'

interface AudioPlayerType {
   image: ImageType
   track: FormattedTrackDetailsType | FormattedAlbumTrackType
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
