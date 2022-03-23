import React from 'react'
import { userStore, musicStore } from '../../Common/stores/index'

export const UserStoreContext = React.createContext(userStore)

export const MusicStoreContext = React.createContext(musicStore)

// export default UserContext
