import { PlaylistOwnerType } from '../../typesv2'

class PlaylistOwnerModel {
   displayName: string
   spotifyExternalUrl: string
   href: string
   id: string
   type: string
   uri: string

   constructor(playlistOwnerInfo: PlaylistOwnerType) {
      const {
         display_name,
         external_urls,
         href,
         id,
         type,
         uri
      } = playlistOwnerInfo

      this.displayName = display_name
      this.spotifyExternalUrl = external_urls.spotify
      this.href = href
      this.id = id
      this.type = type
      this.uri = uri
   }
}

export default PlaylistOwnerModel
