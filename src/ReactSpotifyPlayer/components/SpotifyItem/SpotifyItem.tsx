import React from 'react'
import { useHistory } from 'react-router-dom'
import { SpotifyItemContainer, ItemName, ItemImage } from './styledComponents'

const SpotifyItem = (props: any) => {
   const history = useHistory()
   const { itemDetails, redirectPath } = props
   const { id, name, images } = itemDetails

   const renderItemDetails = () => {
      // if (redirectPath === '/users/spotify/playlists/') {
      // const path = `${redirectPath}${id}`
      history.push(redirectPath)
      // }
   }
   return (
      <SpotifyItemContainer onClick={renderItemDetails}>
         <ItemImage src={images[0].url} alt={name} />
         <ItemName>{name}</ItemName>
      </SpotifyItemContainer>
   )
}

export default SpotifyItem

// name
// images[0].url
