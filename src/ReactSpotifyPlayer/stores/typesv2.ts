export interface ExplicitContentType {
   filter_enabled: boolean
   filter_locked: boolean
}

export interface FollowersType {
   href: null
   total: number
}

export interface ImageType {
   url: string
   height: null | number
   width: null | number
}

export interface GetUserInformationResponseType {
   country: string
   display_name: string
   email: string
   explicit_content: ExplicitContentType
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

export interface FormattedExplicitContentType {
   filterEnabled: boolean
   filterLocked: boolean
}

export interface FormattedGetUserInformationResponseType {
   country: string
   display_name: string
   email: string
   explicitContent: FormattedExplicitContentType
   spotifyExternalUrl: string
   followers: FollowersType
   href: string
   id: string
   images: ImageType[]
   product: string
   type: string
   uri: string
}

export interface PlaylistTracksType {
   href: string
   total: number
}

export interface PlaylistOwnerType {
   display_name: string
   external_urls: {
      spotify: string
   }
   href: string
   id: string
   type: string
   uri: string
}

export interface FormattedPlaylistOwnerType {
   displayName: string
   spotifyExternalUrl: string
   href: string
   id: string
   type: string
   uri: string
}

export interface DetailedPlaylistItemType {
   collaborative: boolean
   description: string
   external_urls: {
      spotify: string
   }
   href: string
   id: string
   images: ImageType[]
   name: string
   owner: PlaylistOwnerType
   primary_color: null
   snapshot_id: string
   tracks: PlaylistTracksType
   type: string
   uri: string
}

export interface FormattedDetailedPlaylistItemType {
   collaborative: boolean
   description: string
   spotifyExternalUrl: string
   href: string
   id: string
   images: ImageType[]
   name: string
   owner: FormattedPlaylistOwnerType
   primaryColor: null
   snapshotId: string
   tracks: PlaylistTracksType
   type: string
   uri: string
}

export interface PlaylistsType {
   href: string
   items: DetailedPlaylistItemType[]
   limit: number
   next: null
   offset: number
   previous: null
   total: number
}

export interface FormattedPlaylistsType {
   href: string
   items: FormattedDetailedPlaylistItemType[]
   limit: number
   next: null
   offset: number
   previous: null
   total: number
}

export interface GetFeaturedPlaylistsResponseType {
   message: string
   playlists: PlaylistsType
}

export interface FormattedGetFeaturedPlaylistsResponseType {
   message: string
   playlists: FormattedPlaylistsType
}

export interface CountryRequestType {
   country: string
}

export interface IdCountryRequestType {
   id: string
   country: string
}

export interface GetFeaturedPlaylistsRequestType extends CountryRequestType {
   timestamp: string
}

export interface SpotifyItemType {
   id: string
   name: string
}

export interface BrowseCategoryItemType extends SpotifyItemType {
   icons: ImageType[]
}

export interface GetBrowseCategoriesResponseType {
   categories: { items: BrowseCategoryItemType[] }
}

export interface FormattedBrowseCategoryItemType extends SpotifyItemType {
   images: ImageType[]
}

export interface FormattedGetBrowseCategoriesResponseType {
   categories: { items: FormattedBrowseCategoryItemType[] }
}

export interface NewReleaseItemType extends SpotifyItemType {
   images: ImageType[]
}

export interface GetNewReleasesResponseType {
   albums: { items: NewReleaseItemType[] }
}

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

export interface IdRequestType {
   id: string
}

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

export interface PlaylistItemType {
   id: string
   name: string
   images: ImageType[]
   tracks: {
      total: number
   }
}

export interface GetCategoryPlaylistsResponseType {
   playlists: {
      items: PlaylistItemType[]
   }
}

export interface FormattedPlaylistItemType {
   id: string
   name: string
   images: ImageType[]
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
}

export interface FormattedGetUserPlaylistsResponseType {
   items: FormattedPlaylistItemType[]
}
