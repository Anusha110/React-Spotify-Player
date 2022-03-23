import { ImageType, LikedSongAlbumType } from '../../typesv2'
import AlbumModel from '../AlbumModel'
import ImageModel from '../ImageModel'

class LikedSongAlbumModel extends AlbumModel {
   id: string
   images: ImageType[]

   constructor(albumInfo: LikedSongAlbumType) {
      super(albumInfo)
      const { id, images } = albumInfo

      this.id = id
      this.images = images.map(eachImage => new ImageModel(eachImage))
   }
}

export default LikedSongAlbumModel
