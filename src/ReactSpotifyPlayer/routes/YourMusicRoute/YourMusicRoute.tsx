import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'

import { MusicStoreContext } from '../../../Common/stores/StoresContext'

import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import LoadingView from '../../components/LoadingView/LoadingView'
import NavBar from '../../components/NavBar/NavBar'

import {
   LikedSongContainer,
   LikedSongImage,
   LikedSongText,
   LikedSongName,
   LikedSongArtistAlbumText,
   YourMusicContainer,
   YourMusicContentContainer,
   YourMusicHeader,
   LikedSongsContainer,
   LikedSongRow,
   LikedSongDuration,
   ContentAndMusicPlayerContainer
} from './styledComponents'

const YourMusicRoute = observer(() => {
   const { getYourMusic, getYourMusicApiStatus, yourMusicModel } = useContext(
      MusicStoreContext
   )
   const [trackId, setTrackId] = useState<string | null>(null)

   useEffect(() => {
      getYourMusic()
   }, [])

   const playTrack = id => {
      setTrackId(id)
   }

   const renderMusicPlayer = () => {
      if (yourMusicModel) {
         const track = yourMusicModel.tracks.find(
            eachTrack => eachTrack.id === trackId
         )
         if (track) {
            const { album, artists } = track
            return (
               <AudioPlayer
                  image={album.images[0]}
                  track={track}
                  artist={artists[0]}
               />
            )
         }
      }
   }

   const renderTrack = track => {
      const { id, name, album, artists, duration } = track
      const bullet = `\u{2022}`

      return (
         <LikedSongRow
            key={id}
            onClick={() => playTrack(id)}
            isPlaying={trackId === track.id}
         >
            <LikedSongContainer>
               <LikedSongImage src={album.images[0].url} alt={name} />
               <LikedSongText>
                  <LikedSongName>{name}</LikedSongName>
                  <LikedSongArtistAlbumText>{`${artists[0].name} ${bullet} ${album.name}`}</LikedSongArtistAlbumText>
               </LikedSongText>
            </LikedSongContainer>
            <LikedSongDuration>{duration}</LikedSongDuration>
         </LikedSongRow>
      )
   }

   const renderLikedSongs = () => {
      if (yourMusicModel) {
         const { tracks } = yourMusicModel
         return tracks.map(eachTrack => renderTrack(eachTrack))
      }
      return null
   }

   const renderSuccessView = () => (
      <YourMusicContainer>
         <NavBar />
         <ContentAndMusicPlayerContainer>
            <YourMusicContentContainer>
               <YourMusicHeader>Your Music</YourMusicHeader>
               <LikedSongsContainer>{renderLikedSongs()}</LikedSongsContainer>
            </YourMusicContentContainer>
            {trackId && renderMusicPlayer()}
         </ContentAndMusicPlayerContainer>
      </YourMusicContainer>
   )

   const renderYourMusic = () => {
      switch (getYourMusicApiStatus) {
         case API_FETCHING:
            return <LoadingView />
         case API_SUCCESS:
            return renderSuccessView()
         default:
            null
      }
   }

   return <>{renderYourMusic()}</>
})

export default YourMusicRoute
