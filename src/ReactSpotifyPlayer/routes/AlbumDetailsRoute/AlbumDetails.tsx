import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'

import { MusicStoreContext } from '../../../Common/stores/StoresContext'

import NavBar from '../../components/NavBar/NavBar'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import LoadingView from '../../components/LoadingView/LoadingView'
import colors from '../../../Common/themes/Colors'
import TrackTable from '../../components/TrackTable/TrackTable'
import { FormattedAlbumTrackType, IdRequestType } from '../../stores/types'
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
} from '../PlaylistDetailsRoute/styledComponents'
import BackButton from '../../components/BackButton/BackButton'

const AlbumDetailsRoute = observer(() => {
   const [
      currentTrack,
      setCurrentTrack
   ] = useState<FormattedAlbumTrackType | null>(null)
   const params: IdRequestType = useParams()
   const { t } = useTranslation()
   const {
      getAlbumDetails,
      getAlbumDetailsApiStatus,
      albumDetailsModel
   } = useContext(MusicStoreContext)

   const columnInfo = [
      {
         Header: '#',
         id: 'index',
         accessor: (_row: any, index: number) => String(index + 1), // https://stackoverflow.com/questions/47518201/how-to-add-a-sortable-index-column-in-react-table,
         width: '100px'
      },
      {
         Header: 'Track',
         accessor: 'name',
         width: '500px'
      },
      {
         Header: 'Time',
         accessor: 'duration',
         width: '500px'
      },
      {
         Header: 'Popularity',
         accessor: 'popularity',
         width: '300px'
      }
   ]

   useEffect(() => {
      getAlbumDetails({ id: params.id })
   }, [])

   const getTrackBgColor = track =>
      track === currentTrack ? colors.blackEight : 'transparent'

   const playTrack = track => {
      setCurrentTrack(track)
   }

   const renderHeaderSection = () => {
      if (albumDetailsModel) {
         return (
            <>
               <BackButton />
               <PlaylistHeader>
                  <PlaylistImage src={albumDetailsModel?.images[0].url} />
                  <PlaylistText>
                     <PlaylistType>
                        {t('reactSpotifyPlayer:home.newReleasesSection')}
                     </PlaylistType>
                     <PlaylistName>{albumDetailsModel?.name}</PlaylistName>
                     <PlaylistOwner>
                        {albumDetailsModel?.artists[0].name}
                     </PlaylistOwner>
                  </PlaylistText>
               </PlaylistHeader>
            </>
         )
      }
      return null
   }

   const renderMusicPlayer = () => {
      if (albumDetailsModel) {
         const image = albumDetailsModel.images[0]
         if (currentTrack) {
            return (
               <AudioPlayer
                  image={image}
                  track={currentTrack}
                  artist={albumDetailsModel.artists[0]}
               ></AudioPlayer>
            )
         }
      }
      return null
   }

   const renderRows = () => {
      const items = albumDetailsModel?.tracks.items
      if (items) {
         return (
            <MobileTrackContainer>
               {items.map(eachItem => (
                  <MobileTrackRow
                     key={eachItem.id}
                     onClick={() => playTrack(eachItem)}
                     style={{
                        backgroundColor: `${getTrackBgColor(eachItem)}`
                     }}
                  >
                     <MobileTrackText>
                        <MobileTrackName>{eachItem.name}</MobileTrackName>
                        <MobileTrackArtist>
                           {albumDetailsModel?.artists[0].name}
                        </MobileTrackArtist>
                     </MobileTrackText>
                     <MobileTrackDuration>
                        {eachItem.duration}
                     </MobileTrackDuration>
                  </MobileTrackRow>
               ))}
            </MobileTrackContainer>
         )
      }
      return null
   }

   const renderTable = () => {
      if (albumDetailsModel) {
         return (
            <TrackTable
               tracks={albumDetailsModel.tracks.items}
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

   const renderAlbumDetails = () => {
      switch (getAlbumDetailsApiStatus) {
         case API_FETCHING:
            return <LoadingView />
         case API_SUCCESS:
            return renderSuccessView()
         default:
            null
      }
   }

   return <>{renderAlbumDetails()}</>
})

export default AlbumDetailsRoute
