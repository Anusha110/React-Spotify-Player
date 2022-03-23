import React from 'react'
import { useHistory } from 'react-router-dom'
import { SpotifyItemType } from '../../stores/types'
import { SpotifyItemContainer, ItemName, ItemImage } from './styledComponents'

export interface SpotifyItemPropsType {
   itemDetails: SpotifyItemType
   redirectPath: string
}

const SpotifyItem = (props: SpotifyItemPropsType) => {
   const history = useHistory()
   const { itemDetails, redirectPath } = props
   const { name, images } = itemDetails
   const imageUrl = images[0].url

   const renderItemDetails = () => {
      history.push(redirectPath)
   }
   return (
      <SpotifyItemContainer onClick={renderItemDetails}>
         <ItemImage src={imageUrl} alt={name} />
         <ItemName>{name}</ItemName>
      </SpotifyItemContainer>
   )
}

export default SpotifyItem
