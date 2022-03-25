import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //eslint-disable-line
import { useTranslation } from 'react-i18next'
import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'

import { MusicStoreContext } from '../../../Common/stores/StoresContext'

import NavBar from '../../components/NavBar/NavBar'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import colors from '../../../Common/themes/Colors'
import TrackTable from '../../components/TrackTable/TrackTable'
import { FormattedTrackDetailsType, IdRequestType } from '../../stores/types'
import LoadingView from '../../components/LoadingView/LoadingView'
import BackButton from '../../components/BackButton/BackButton'
import {
   PlaylistContentContainer,
   MobilePlaylistDetailsContainer,
   DesktopPlaylistDetailsContainer,
   PlaylistHeader,
   PlaylistImage,
   PlaylistName,
   PlaylistOwner,
   PlaylistText,
   PlaylistType,
   TracksContainer,
   MobileTrackDuration,
   MobileTrackArtist,
   MobileTrackName,
   MobileTrackRow,
   MobileTrackText,
   MobileTrackContainer
} from './styledComponents'

const PlaylistDetailsRoute = observer(() => {
   const [
      currentTrack,
      setCurrentTrack
   ] = useState<FormattedTrackDetailsType | null>(null)
   const params: IdRequestType = useParams()
   const { t } = useTranslation()
   const {
      getPlaylistDetails,
      getPlaylistDetailsApiStatus,
      playlistDetailsModel
   } = useContext(MusicStoreContext)

   const columnInfo = [
      {
         Header: '',
         id: 'index',
         accessor: (_row: any, index: number) => String(index + 1), // https://stackoverflow.com/questions/47518201/how-to-add-a-sortable-index-column-in-react-table,
         width: '100px'
      },
      {
         Header: 'Track',
         accessor: 'track.name',
         width: '400px'
         // accessor is the "key" in the data
      },
      {
         Header: 'Album',
         accessor: 'track.album.name',
         width: '400px'
      },
      {
         Header: 'Time',
         accessor: 'track.durationMs',
         width: '150px',
         maxWidth: '300px'
      },
      {
         Header: 'Artist',
         accessor: 'track.artists[0].name',
         width: '300px',
         maxWidth: '500px'
      },
      {
         Header: 'Added',
         accessor: 'addedAt',
         width: '300px',
         maxWidth: '300px'
      }
   ]

   useEffect(() => {
      getPlaylistDetails({ id: params.id })
   }, [])

   const renderHeaderSection = () => (
      <>
         <BackButton />
         <PlaylistHeader>
            <PlaylistImage src={playlistDetailsModel?.images[0].url} />
            <PlaylistText>
               <PlaylistType>
                  {t('reactSpotifyPlayer:home.featuresPlaylistsSection')}
               </PlaylistType>
               <PlaylistName>{playlistDetailsModel?.name}</PlaylistName>
               <PlaylistOwner>
                  {playlistDetailsModel?.ownerDisplayName}
               </PlaylistOwner>
            </PlaylistText>
         </PlaylistHeader>
      </>
   )

   const getTrackBgColor = track =>
      track === currentTrack ? colors.blackEight : 'transparent'

   const playTrack = track => {
      setCurrentTrack(track)
   }

   const renderMusicPlayer = () => {
      if (playlistDetailsModel) {
         const image = playlistDetailsModel?.images[0]
         if (currentTrack) {
            return (
               <AudioPlayer
                  image={image}
                  track={currentTrack}
                  artist={currentTrack.artists[0]}
               />
            )
         }
      }
      return null
   }

   const renderRows = () => {
      const items = playlistDetailsModel?.tracks.items

      return (
         <MobileTrackContainer>
            {items?.map(eachItem => (
               <MobileTrackRow
                  key={eachItem.track.id}
                  onClick={() => playTrack(eachItem.track)}
                  style={{
                     backgroundColor: `${getTrackBgColor(eachItem.track)}`
                  }}
               >
                  <MobileTrackText>
                     <MobileTrackName>{eachItem.track.name}</MobileTrackName>
                     <MobileTrackArtist>
                        {eachItem.track.artists[0].name}
                     </MobileTrackArtist>
                  </MobileTrackText>
                  <MobileTrackDuration>
                     {eachItem.track.durationMs}
                  </MobileTrackDuration>
               </MobileTrackRow>
            ))}
         </MobileTrackContainer>
      )
   }

   const renderTable = () => {
      if (playlistDetailsModel) {
         return (
            <TrackTable
               tracks={playlistDetailsModel.tracks.items}
               columnInfo={columnInfo}
               getTrackBgColor={getTrackBgColor}
               playTrack={playTrack}
            />
         )
      }
      return null
   }

   const renderDesktopView = () => (
      <DesktopPlaylistDetailsContainer>
         <NavBar />
         <PlaylistContentContainer>
            <TracksContainer>
               {renderHeaderSection()}
               {renderTable()}
            </TracksContainer>
            {currentTrack && renderMusicPlayer()}
         </PlaylistContentContainer>
      </DesktopPlaylistDetailsContainer>
   )

   const renderMobileView = () => (
      <MobilePlaylistDetailsContainer>
         <PlaylistContentContainer>
            <TracksContainer>
               {renderHeaderSection()}
               {renderRows()}
            </TracksContainer>
            {currentTrack && renderMusicPlayer()}
         </PlaylistContentContainer>
      </MobilePlaylistDetailsContainer>
   )

   const renderSuccessView = () => (
      <>
         {renderMobileView()}
         {renderDesktopView()}
      </>
   )

   const renderPlaylistDetails = () => {
      switch (getPlaylistDetailsApiStatus) {
         case API_FETCHING:
            return <LoadingView />
         case API_SUCCESS:
            return renderSuccessView()
         default:
            null
      }
   }
   return <>{renderPlaylistDetails()}</>
})

export default PlaylistDetailsRoute
