import {
   ArtistType,
   FormattedAlbumTrackType,
   GetAlbumDetailsResponseType,
   ImageType
} from '../../typesv2'
import AlbumTrackModel from '../AlbumTrackModel'
import ArtistModel from '../ArtistModel'
import ImageModel from '../ImageModel'

class AlbumModel {
   id: string
   name: string
   images: ImageType[]
   artists: ArtistType[]
   tracks: {
      items: FormattedAlbumTrackType[]
   }

   constructor(albumInfo: GetAlbumDetailsResponseType) {
      const { id, name, images, artists, tracks } = albumInfo

      this.id = id
      this.name = name
      this.images = images.map(eachImage => new ImageModel(eachImage))
      this.artists = artists.map(eachArtist => new ArtistModel(eachArtist))
      this.tracks = {
         items: tracks.items.map(eachItem => new AlbumTrackModel(eachItem))
      }
   }
}

export default AlbumModel
