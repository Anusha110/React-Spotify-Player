import React from 'react'
import {
   userStore,
   musicStore,
   featuredPlaylistStore,
   categoryPlaylistStore,
   newReleasesStore
} from '../../Common/stores/index'

export const UserStoreContext = React.createContext(userStore)

export const MusicStoreContext = React.createContext(musicStore)

export const FeaturedPlaylistContext = React.createContext(
   featuredPlaylistStore
)

export const CategoryPlaylistContext = React.createContext(
   categoryPlaylistStore
)

export const NewReleasesContext = React.createContext(newReleasesStore)

// export default UserContext
