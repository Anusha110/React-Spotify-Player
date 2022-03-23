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

export interface FormattedBrowseCategoryItemType {
   id: string
   name: string
   images: ImageType[]
}

export interface GetBrowseCategoriesResponseType {
   categories: { items: BrowseCategoryItemType[] }
}

export interface FormattedGetBrowseCategoriesResponseType {
   categories: FormattedBrowseCategoryItemType[]
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

export interface TrackDetailsType {
   artists: ArtistType[]
   duration_ms: number
   id: string
   name: string
   preview_url: string
   track_number: number
   album: AlbumType
}

export interface TrackItemType {
   added_at: string
   track: TrackDetailsType
}

export interface GetPlaylistDetailsResponseType {
   id: string
   images: ImageType[]
   name: string
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
   durationMs: string
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

export interface FormattedGetPlaylistDetailsResponseType {
   id: string
   images: ImageType[]
   name: string
   ownerDisplayName: string
   tracks: {
      items: FormattedTrackItemType[]
   }
}

// Get Album Details

export interface AlbumTrackType {
   id: string
   name: string
   preview_url: string
   duration_ms: number
   popularity: number
}

export interface FormattedAlbumTrackType {
   id: string
   name: string
   previewUrl: string
   duration: string
   popularity: number
}

export interface GetAlbumDetailsResponseType {
   id: string
   name: string
   images: ImageType[]
   artists: ArtistType[]
   tracks: {
      items: AlbumTrackType[]
   }
}

export interface FormattedGetAlbumDetailsResponseType {
   id: string
   name: string
   images: ImageType[]
   artists: ArtistType[]
   tracks: {
      items: FormattedAlbumTrackType[]
   }
}
