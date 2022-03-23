import React from 'react'
import { Route } from 'react-router-dom'
import {
   ALBUM_DETAILS_PATH,
   CATEGORY_PLAYLIST_DETAILS_PATH,
   HOME_SCREEN_PATH,
   PLAYLIST_DETAILS_PATH,
   PROFILE_SCREEN_PATH,
   USER_PLAYLISTS_PATH,
   USER_PLAYLIST_DETAILS_PATH,
   YOUR_MUSIC_PATH
} from '../../Common/constants/NavigationConstants'
import ProtectedRoute from '../../Common/routes/App/ProtectedRoute'
import AlbumDetailsRoute from './AlbumDetailsRoute/AlbumDetails'
import CategoryPlaylistsRoute from './CategoryPlaylistsRoute/CategoryPlaylistsRoute'
import HomeRoute from './HomeRoute/HomeRoute'
import PlaylistDetailsRoute from './PlaylistDetailsRoute/PlaylistDetailsRoute'
import ProfileRoute from './ProfileRoute/ProfileRoute'
import UserPlaylistsRoute from './UserPlaylistsRoute/UserPlaylistsRoute'
import YourMusicRoute from './YourMusicRoute/YourMusicRoute'

const homeRoute = (
   <ProtectedRoute
      key={HOME_SCREEN_PATH}
      exact
      path={HOME_SCREEN_PATH}
      component={HomeRoute}
   />
)
const profileRoute = (
   <ProtectedRoute
      key={PROFILE_SCREEN_PATH}
      exact
      path={PROFILE_SCREEN_PATH}
      component={ProfileRoute}
   />
)

const playlistDetailsRoute = (
   <ProtectedRoute
      key={PLAYLIST_DETAILS_PATH}
      exact
      path={PLAYLIST_DETAILS_PATH}
      component={PlaylistDetailsRoute}
   />
)

const categoryPlaylistsRoute = (
   <ProtectedRoute
      key={CATEGORY_PLAYLIST_DETAILS_PATH}
      exact
      path={CATEGORY_PLAYLIST_DETAILS_PATH}
      component={CategoryPlaylistsRoute}
   />
)

const albumDetailsRoute = (
   <ProtectedRoute
      key={ALBUM_DETAILS_PATH}
      exact
      path={ALBUM_DETAILS_PATH}
      component={AlbumDetailsRoute}
   />
)

const yourMusicRoute = (
   <ProtectedRoute
      key={YOUR_MUSIC_PATH}
      exact
      path={YOUR_MUSIC_PATH}
      component={YourMusicRoute}
   />
)

const userPlaylistsRoute = (
   <ProtectedRoute
      key={USER_PLAYLISTS_PATH}
      exact
      path={USER_PLAYLISTS_PATH}
      component={UserPlaylistsRoute}
   />
)

const userPlaylistDetailsRoute = (
   <ProtectedRoute
      key={USER_PLAYLIST_DETAILS_PATH}
      exact
      path={USER_PLAYLIST_DETAILS_PATH}
      component={PlaylistDetailsRoute}
   />
)

export default [
   profileRoute,
   homeRoute,
   playlistDetailsRoute,
   categoryPlaylistsRoute,
   albumDetailsRoute,
   yourMusicRoute,
   userPlaylistsRoute,
   userPlaylistDetailsRoute
]
