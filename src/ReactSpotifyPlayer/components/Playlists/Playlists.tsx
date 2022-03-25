import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { HOME_SCREEN_PATH } from '../../../Common/constants/NavigationConstants'
import { FormattedPlaylistItemType } from '../../stores/types'
import BackButton from '../BackButton/BackButton'
import NavBar from '../NavBar/NavBar'
import {
   Title,
   PlaylistItem,
   PlaylistImage,
   PlaylistText,
   PlaylistName,
   TotalTracks,
   PlaylistsContainer,
   PlaylistsContentContainer,
   PlaylistItems
} from './styledComponents'

interface PlaylistItemPropsType {
   title: string
   playlists: FormattedPlaylistItemType[]
   redirectPath: string
}

const Playlists = (props: PlaylistItemPropsType) => {
   const history = useHistory()
   const { title, playlists, redirectPath } = props

   const onPlaylistClick = (id: string) => {
      history.push(`${redirectPath}${id}/`)
   }

   const renderPlaylistItem = playlist => {
      const { id, name, images, totalTracks } = playlist
      return (
         <PlaylistItem key={id} onClick={() => onPlaylistClick(id)}>
            <PlaylistImage src={images[0].url} alt={name} />
            <PlaylistText>
               <PlaylistName>{name}</PlaylistName>
               <TotalTracks>{totalTracks} tracks</TotalTracks>
            </PlaylistText>
         </PlaylistItem>
      )
   }

   return (
      <PlaylistsContainer>
         <NavBar />
         <PlaylistsContentContainer>
            <BackButton />
            <Title>{title}</Title>
            <PlaylistItems>
               {playlists.map(eachPlaylist => renderPlaylistItem(eachPlaylist))}
            </PlaylistItems>
         </PlaylistsContentContainer>
      </PlaylistsContainer>
   )
}

export default Playlists
