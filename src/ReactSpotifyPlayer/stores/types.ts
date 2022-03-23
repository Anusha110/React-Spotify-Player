export interface CountryRequestType {
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
   display_name: string
   id: string
}

export interface DetailedPlaylistItemType extends SpotifyItemType {
   description: string
   owner: PlaylistOwnerType
}

export interface PlaylistsType {
   items: DetailedPlaylistItemType[]
}

export interface GetFeaturedPlaylistsResponseType {
   message: string
   playlists: PlaylistsType
}

export interface FormattedPlaylistType extends SpotifyItemType {
   description: string
   owner: PlaylistOwnerType
}

export interface FormattedGetFeaturedPlaylistsResponseType {
   message: string
   playlists: FormattedPlaylistType[]
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
   categories: { items: SpotifyItemType[] }
}

// Get New Releases

export interface GetNewReleasesResponseType {
   albums: { items: SpotifyItemType[] }
}
