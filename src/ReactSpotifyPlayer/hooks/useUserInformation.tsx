import React, { useContext, useEffect } from 'react'
import { UserStoreContext } from '../../Common/stores/StoresContext'

const useUserInformation = () => {
   const { userInformationModel, getUserInformation } = useContext(
      UserStoreContext
   )

   useEffect(() => {
      if (!userInformationModel) {
         getUserInformation()
      }
   }, [])

   return userInformationModel // add
}

export default useUserInformation

// return {useriNformation, status } etc.
// checking conditionals before hand
