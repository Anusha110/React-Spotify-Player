import {
   FormattedPlaylistOwnerType,
   ImageType,
   DetailedPlaylistItemType,
   PlaylistOwnerType,
   PlaylistTracksType
} from '../../typesv2'
import ImageModel from '../ImageModel'
import PlaylistOwnerModel from '../PlaylistOwnerModel'
import PlaylistTracksModel from '../PlaylistTracksModel'

class DetailedPlaylistItemModel {
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

   constructor(playlistItemInfo: DetailedPlaylistItemType) {
      const {
         collaborative,
         description,
         external_urls,
         href,
         id,
         images,
         name,
         owner,
         primary_color,
         snapshot_id,
         tracks,
         type,
         uri
      } = playlistItemInfo

      this.collaborative = collaborative
      this.description = description
      this.spotifyExternalUrl = external_urls.spotify
      this.href = href
      this.id = id
      this.images = images.map(eachImage => new ImageModel(eachImage))
      this.name = name
      this.owner = new PlaylistOwnerModel(owner)
      this.primaryColor = primary_color
      this.snapshotId = snapshot_id
      this.tracks = new PlaylistTracksModel(tracks)
      this.type = type
      this.uri = uri
   }
}

export default DetailedPlaylistItemModel
