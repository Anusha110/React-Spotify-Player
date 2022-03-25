import React, { useContext } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useHistory, useLocation } from 'react-router'

import { HOME_SCREEN_PATH } from '../../../Common/constants/NavigationConstants'
import { UserStoreContext } from '../../../Common/stores/StoresContext'

import { BackButtonContainer, BackText } from './styledComponents'

const BackButton = () => {
   const history = useHistory()
   const { pathname } = useLocation()
   const { userInformationModel } = useContext(UserStoreContext)

   const onBackButtonClick = () => {
      if (userInformationModel) {
         const { id } = userInformationModel
         const userPlaylistsPath = `/users/${id}/playlists/`
         const regex = `(\/users\/)[a-zA-Z0-9]*(\/playlists\/)[a-zA-Z0-9]*(\/)` //eslint-disable-line
         const path = pathname.match(regex)
            ? userPlaylistsPath
            : HOME_SCREEN_PATH
         history.push(path)
      }
   }

   return (
      <BackButtonContainer onClick={onBackButtonClick}>
         <IoMdArrowBack size={28} />
         <BackText>Back</BackText>
      </BackButtonContainer>
   )
}

export default BackButton
