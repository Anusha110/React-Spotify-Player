import SpotifyItemModel from './models/SpotifyItemModel'

export interface IdRequestType {
   id: string
}
export interface CountryRequestType {
   country: string
}

export interface GetFeaturedPlaylistsRequestType {
   timestamp: string
   country: string
}

export interface IdCountryRequestType {
   id: string
   country: string
}

export interface ImageType {
   url: string
   height: null | number
   width: null | number
}

export interface SpotifyItemType {
   id: string
   name: string
   images: ImageType[]
}

export interface BaseTrackType {
   id: string
   name: string
   preview_url: string
   duration_ms: number
}

// Get User Information

export interface FollowersType {
   href: null
   total: number
}
export interface GetUserInformationResponseType {
   country: string
   display_name: string
   email: string
   external_urls: {
      spotify: string
   }
   followers: FollowersType
   href: string
   id: string
   images: ImageType[]
   product: string
   type: string
   uri: string
}

export interface FormattedGetUserInformationResponseType {
   country: string
   display_name: string
   email: string
   spotifyExternalUrl: string
   followers: FollowersType
   href: string
   id: string
   images: ImageType[]
   product: string
   type: string
   uri: string
}

// Get Featured Playlists

export interface PlaylistOwnerType {
   id: string
   display_name: string
}

export interface FormattedPlaylistOwnerType {
   id: string
   displayName: string
}

export interface FeaturedPlaylistItemType extends SpotifyItemType {
   description: string
   owner: PlaylistOwnerType
}

export interface FormattedFeaturedPlaylistType extends SpotifyItemType {
   description: string
   owner: FormattedPlaylistOwnerType
}

export interface PlaylistsType {
   items: FeaturedPlaylistItemType[]
}

export interface GetFeaturedPlaylistsResponseType {
   message: string
   playlists: PlaylistsType
}
export interface FormattedGetFeaturedPlaylistsResponseType {
   message: string
   playlists: FormattedFeaturedPlaylistType[]
}

// Get Browse Categories

export interface BrowseCategoryItemType {
   id: string
   name: string
   icons: ImageType[]
}

export interface GetBrowseCategoriesResponseType {
   categories: { items: BrowseCategoryItemType[] }
}

export interface FormattedGetBrowseCategoriesResponseType {
   categories: SpotifyItemType[]
}

// Get New Releases

export interface GetNewReleasesResponseType {
   albums: { items: SpotifyItemType[] }
}

export interface FormattedGetNewReleasesResponseType {
   albums: SpotifyItemType[]
}

// Get Playlist Details

export interface AlbumType {
   name: string
   release_date: string
}

export interface ArtistType {
   name: string
}

export interface TrackDetailsType extends BaseTrackType {
   artists: ArtistType[]
   album: AlbumType
   track_number: number
}

export interface TrackItemType {
   added_at: string
   track: TrackDetailsType
}

export interface GetPlaylistDetailsResponseType extends SpotifyItemType {
   owner: {
      display_name: string
   }
   tracks: {
      items: TrackItemType[]
   }
}

export interface FormattedAlbumType {
   name: string
   releaseDate: string
}

export interface FormattedTrackDetailsType {
   artists: ArtistType[]
   duration: string
   id: string
   name: string
   previewUrl: string
   trackNumber: number
   album: FormattedAlbumType
}

export interface FormattedTrackItemType {
   addedAt: string
   track: FormattedTrackDetailsType
}

export interface FormattedGetPlaylistDetailsResponseType
   extends SpotifyItemType {
   ownerDisplayName: string
   tracks: {
      items: FormattedTrackItemType[]
   }
}

// Get Album Details

export interface AlbumTrackType extends BaseTrackType {
   popularity: number
}

export interface FormattedAlbumTrackType {
   id: string
   name: string
   previewUrl: string
   duration: string
   popularity: number
}

export interface GetAlbumDetailsResponseType extends SpotifyItemType {
   artists: ArtistType[]
   tracks: {
      items: AlbumTrackType[]
   }
}

export interface FormattedGetAlbumDetailsResponseType extends SpotifyItemType {
   artists: ArtistType[]
   tracks: {
      items: FormattedAlbumTrackType[]
   }
}

export interface PlaylistItemType extends SpotifyItemType {
   tracks: {
      total: number
   }
}

export interface GetCategoryPlaylistsResponseType {
   playlists: {
      items: PlaylistItemType[]
   }
}

export interface FormattedPlaylistItemType extends SpotifyItemType {
   totalTracks: number
}

export interface FormattedGetCategoryPlaylistsResponseType {
   playlists: FormattedPlaylistItemType[]
}

export interface LikedSongAlbumType extends AlbumType {
   id: string
   images: ImageType[]
}

export interface LikedSongTrackType {
   album: LikedSongAlbumType
   artists: ArtistType[]
   duration_ms: number
   id: string
   name: string
   preview_url: string
}

export interface GetYourMusicItemType {
   track: LikedSongTrackType
}

export interface GetYourMusicResponseType {
   items: GetYourMusicItemType[]
}

export interface FormattedLikedSongAlbumType extends FormattedAlbumType {
   id: string
   images: ImageType[]
}

export interface FormattedLikedSongTrackType {
   album: FormattedLikedSongAlbumType
   artists: ArtistType[]
   duration: string
   id: string
   name: string
   previewUrl: string
}

export interface FormattedGetYourMusicResponseType {
   tracks: FormattedLikedSongTrackType[]
}

export interface GetUserPlaylistsResponseType {
   items: PlaylistItemType[]
   total: number
}

export interface FormattedGetUserPlaylistsResponseType {
   items: FormattedPlaylistItemType[]
   total: number
}
