import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { MusicStoreContext } from '../../../Common/stores/StoresContext'
import LoadingView from '../../components/LoadingView/LoadingView'
import SideBar from '../../components/SideBar/SideBar'
import TrackDetailsModel from '../../stores/models/TrackDetailsModel'
import {
   MusicPlayer,
   PlaylistImageInPlayer,
   TrackText,
   TrackName,
   TrackArtists
} from '../PlaylistDetailsRoute/styledComponents'
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
            const { name, album, artists, previewUrl } = track
            return (
               <MusicPlayer>
                  <PlaylistImageInPlayer src={album.images[0].url} />
                  <TrackText>
                     <TrackName>{name}</TrackName>
                     <TrackArtists>{artists[0].name}</TrackArtists>
                  </TrackText>
                  <audio src={previewUrl} preload='auto' controls />
               </MusicPlayer>
            )
         }
      }
   }

   const renderLikedSongs = () => {
      if (yourMusicModel) {
         const { tracks } = yourMusicModel
         return tracks.map(eachTrack => {
            const { id, name, album, artists, duration } = eachTrack
            const bullet = `\u{2022}`
            return (
               <LikedSongRow
                  key={id}
                  onClick={() => playTrack(id)}
                  isPlaying={trackId === eachTrack.id}
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
         })
      }
      return null
   }

   const renderSuccessView = () => (
      <YourMusicContainer>
         <SideBar />
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
