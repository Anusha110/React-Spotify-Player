import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import { HOME_SCREEN_PATH } from '../../../Common/constants/NavigationConstants'
import { FormattedPlaylistItemType } from '../../stores/typesv2'
import SideBar from '../NavBar/NavBar'
import {
   Title,
   PlaylistItem,
   PlaylistImage,
   PlaylistText,
   PlaylistName,
   TotalTracks,
   PlaylistsContainer,
   PlaylistsContentContainer,
   BackButtonContainer,
   BackText,
   PlaylistItems
} from './styledComponents'

interface PlaylistItemPropsType {
   title: string
   playlists: FormattedPlaylistItemType[]
   redirectPath: string
   backbuttonPath?: string
}

const Playlists = (props: PlaylistItemPropsType) => {
   const history = useHistory()
   const { title, playlists, redirectPath, backbuttonPath } = props
   const backlink = backbuttonPath ? backbuttonPath : HOME_SCREEN_PATH
   // console.log('backlink', backlink)

   const onPlaylistClick = (id: string) => {
      history.push(`${redirectPath}${id}/`)
   }

   const renderBackButton = () => {
      console.log('backlink', backlink)
      return (
         <BackButtonContainer href={backlink}>
            <IoMdArrowBack size={28} />
            <BackText>Back</BackText>
         </BackButtonContainer>
      )
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
         <SideBar />
         <PlaylistsContentContainer>
            {renderBackButton()}
            <Title>{title}</Title>
            <PlaylistItems>
               {playlists.map(eachPlaylist => renderPlaylistItem(eachPlaylist))}
            </PlaylistItems>
         </PlaylistsContentContainer>
      </PlaylistsContainer>
   )
}

export default Playlists
